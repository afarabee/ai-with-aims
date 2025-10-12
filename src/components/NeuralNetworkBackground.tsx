import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseY: number;
  waveOffset: number;
}

interface Connection {
  node1: Node;
  node2: Node;
}

const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create nodes
    const nodeCount = 80;
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        baseY: Math.random() * canvas.height,
        waveOffset: Math.random() * Math.PI * 2,
      });
    }

    // Create connections
    const connections: Connection[] = [];
    const maxDistance = 150;
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          connections.push({ node1: nodes[i], node2: nodes[j] });
        }
      }
    }

    let time = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(10, 0, 20, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add transparent overlay for depth
      ctx.fillStyle = "rgba(10, 0, 20, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.007;

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Wave motion
        const waveAmplitude = 30;
        const waveFrequency = 0.4;
        node.y = node.baseY + Math.sin(time * waveFrequency + node.waveOffset) * waveAmplitude;
        
        // Horizontal drift
        node.x += node.vx;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;

        // Calculate wave peak intensity (0 to 1)
        const wavePhase = Math.sin(time * waveFrequency + node.waveOffset);
        const peakIntensity = Math.max(0, wavePhase);
        
        // Only ~12% of nodes pulse at once
        const shouldPulse = peakIntensity > 0.85;
        
        // Distance from logo area (left half, center)
        const logoX = canvas.width * 0.25;
        const logoY = canvas.height * 0.5;
        const distFromLogo = Math.sqrt(Math.pow(node.x - logoX, 2) + Math.pow(node.y - logoY, 2));
        const logoProximity = Math.max(0, 1 - distFromLogo / (canvas.width * 0.3));
        
        // Reduce brightness behind logo by 20%
        const dimFactor = 1 - (logoProximity * 0.2);
        
        // Mostly pink nodes with occasional yellow pulses
        const useYellow = shouldPulse && Math.random() > 0.7;
        const nodeColor = useYellow ? '247, 201, 72' : '242, 127, 155'; // yellow or pink
        const baseOpacity = useYellow ? peakIntensity * 0.9 : 0.4;

        // Draw node with glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 10);
        gradient.addColorStop(0, `rgba(${nodeColor}, ${baseOpacity * dimFactor})`);
        gradient.addColorStop(1, `rgba(${nodeColor}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center
        if (shouldPulse && useYellow) {
          ctx.fillStyle = `rgba(255, 255, 255, ${peakIntensity * 0.6 * dimFactor})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw connections with pink/cyan gradient
      connections.forEach(({ node1, node2 }) => {
        const dx = node1.x - node2.x;
        const dy = node1.y - node2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const baseOpacity = (1 - distance / maxDistance);
          
          // Distance from logo area
          const midX = (node1.x + node2.x) / 2;
          const midY = (node1.y + node2.y) / 2;
          const logoX = canvas.width * 0.25;
          const logoY = canvas.height * 0.5;
          const distFromLogo = Math.sqrt(Math.pow(midX - logoX, 2) + Math.pow(midY - logoY, 2));
          const logoProximity = Math.max(0, 1 - distFromLogo / (canvas.width * 0.3));
          const dimFactor = 1 - (logoProximity * 0.2);
          
          // 60% pink, 40% cyan gradient
          const usePink = Math.random() < 0.6;
          const color = usePink ? '255, 79, 174' : '0, 255, 255'; // pink or cyan
          const glowOpacity = usePink ? baseOpacity * 0.2 : baseOpacity * 0.3;
          
          ctx.strokeStyle = `rgba(${color}, ${glowOpacity * dimFactor})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node1.x, node1.y);
          ctx.lineTo(node2.x, node2.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, #0a0014 0%, #1a0a2e 100%)" }}
    />
  );
};

export default NeuralNetworkBackground;
