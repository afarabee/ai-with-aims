import { useEffect, useState } from "react";

const LogoPingOverlay = () => {
  // Approximate positions of yellow dots in the logo (percentage-based)
  const dotPositions = [
    { top: "15%", left: "25%" },
    { top: "25%", left: "45%" },
    { top: "18%", left: "65%" },
    { top: "42%", left: "75%" },
    { top: "58%", left: "72%" },
    { top: "72%", left: "58%" },
    { top: "78%", left: "35%" },
  ];

  const [activeDots, setActiveDots] = useState<Set<number>>(new Set());

  useEffect(() => {
    const triggerRandomPing = () => {
      // Select 1-2 random dots to ping
      const numDots = Math.random() > 0.6 ? 2 : 1;
      const newActiveDots = new Set<number>();
      
      for (let i = 0; i < numDots; i++) {
        const randomIndex = Math.floor(Math.random() * dotPositions.length);
        newActiveDots.add(randomIndex);
      }
      
      setActiveDots(newActiveDots);
      
      // Clear active dots after animation completes
      setTimeout(() => {
        setActiveDots(new Set());
      }, 2500);
    };

    // Initial trigger
    const initialDelay = setTimeout(triggerRandomPing, 1000);
    
    // Set up interval for random pings
    const interval = setInterval(() => {
      triggerRandomPing();
    }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ scale: "1.375" }}>
      {dotPositions.map((position, index) => (
        <div
          key={index}
          className={`absolute w-4 h-4 rounded-full ${
            activeDots.has(index) ? "ping-subtle-active" : ""
          }`}
          style={{
            top: position.top,
            left: position.left,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default LogoPingOverlay;
