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
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
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

      time += 0.01;

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Wave motion
        const waveAmplitude = 30;
        const waveFrequency = 0.5;
        node.y = node.baseY + Math.sin(time * waveFrequency + node.waveOffset) * waveAmplitude;
        
        // Horizontal drift
        node.x += node.vx;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;

        // Calculate wave peak intensity (0 to 1)
        const wavePhase = Math.sin(time * waveFrequency + node.waveOffset);
        const peakIntensity = Math.max(0, wavePhase) * 0.8 + 0.2;

        // Draw node with glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${peakIntensity})`);
        gradient.addColorStop(1, `rgba(0, 255, 255, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center
        ctx.fillStyle = `rgba(255, 255, 255, ${peakIntensity * 0.8})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      connections.forEach(({ node1, node2 }) => {
        const dx = node1.x - node2.x;
        const dy = node1.y - node2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3;
          
          ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
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
