import { useMode } from "./mode-provider";
import { motion } from "framer-motion";
import { Activity, Footprints, Bike } from "lucide-react";

export function ModeSwitcher() {
  const { mode, setMode } = useMode();

  const modes = [
    { id: "runner", label: "Runners", icon: Activity, color: "text-[hsl(15_100%_64%)]", desc: "Aggressive" },
    { id: "walker", label: "Walkers", icon: Footprints, color: "text-[hsl(180_100%_41%)]", desc: "Strategic" },
    { id: "cyclist", label: "Cyclists", icon: Bike, color: "text-[hsl(77_100%_59%)]", desc: "Expansive" },
  ] as const;

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
      <div className="flex justify-center text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
        [ Select Faction ]
      </div>
      <div className="grid grid-cols-3 gap-2 p-1 bg-muted/30 rounded-lg border border-border w-full relative">
        {modes.map((m) => {
          const isActive = mode === m.id;
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`relative flex flex-col items-center justify-center p-4 rounded-md transition-all duration-300 z-10 ${
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mode-bg"
                  className="absolute inset-0 bg-primary rounded-md z-[-1]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={`w-6 h-6 mb-2 ${isActive ? "text-primary-foreground" : ""}`} />
              <span className="font-bold uppercase tracking-wider text-sm">{m.label}</span>
              <span className={`text-[10px] font-mono mt-1 opacity-70 hidden sm:block ${isActive ? "text-primary-foreground" : ""}`}>
                {m.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
