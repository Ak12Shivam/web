import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function StatCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-6xl font-bold font-mono text-primary mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
