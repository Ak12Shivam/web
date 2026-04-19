import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMode } from "./mode-provider";

export function HexGrid({ className = "" }: { className?: string }) {
  const { mode } = useMode();
  const [hexes, setHexes] = useState<{ id: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    // Generate a grid of hexes
    const items = [];
    for (let i = 0; i < 40; i++) {
      items.push({
        id: i,
        // Randomly assign colors to simulate territory
        color: Math.random() > 0.6 ? "var(--color-runner)" : Math.random() > 0.5 ? "var(--color-walker)" : "var(--color-cyclist)",
        delay: Math.random() * 2,
      });
    }
    setHexes(items);
  }, []);

  return (
    <div className={`relative flex flex-wrap justify-center content-center overflow-hidden opacity-30 ${className}`}>
      {/* Container to handle the hex grid layout */}
      <div className="flex flex-wrap w-[120%] -ml-[10%] rotate-12 scale-150 transform-gpu">
        {hexes.map((hex, i) => (
          <motion.div
            key={hex.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 4,
              delay: hex.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-24 h-28 m-1 hex-clip border-2 border-border/50 relative group"
            style={{
              backgroundColor: hex.color,
              marginTop: i % 2 === 0 ? "3.5rem" : "0", // Staggering effect
            }}
          >
            <div className="absolute inset-0 bg-background/50 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-white/10 hex-clip"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10 mix-blend-overlay"></div>
    </div>
  );
}
