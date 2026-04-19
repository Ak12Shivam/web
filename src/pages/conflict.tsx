import { Layout } from "@/components/layout";
import { Shield, Sword, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const feedItems = [
  {
    type: "WARNING",
    typeClass: "text-amber-500 dark:text-[hsl(77_100%_59%)]",
    message: "A cyclist raided your runner zone in",
    location: "Downtown",
    time: "2m ago",
  },
  {
    type: "SUCCESS",
    typeClass: "text-[hsl(15_100%_55%)] dark:text-[hsl(15_100%_64%)]",
    message: "Your clan defended",
    location: "North Park",
    suffix: "against a walker assault.",
    time: "15m ago",
  },
  {
    type: "INFO",
    typeClass: "text-muted-foreground",
    message: "Territory decay imminent in Sector 7G.",
    location: null,
    time: "1h ago",
    faded: true,
  },
];

export default function Conflict() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">System</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-destructive">
            Conflict Protocol
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-mono">Cross-mode battle mechanics.</p>
        </motion.div>

        {/* Three mechanic cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 md:mb-16">
          {[
            {
              icon: Sword,
              color: "text-destructive",
              border: "border-destructive/30",
              glow: "bg-destructive/10",
              title: "Overwriting",
              desc: "Enter an enemy hex to strip its color. Stay inside or pass through multiple times to overwrite it with your own faction's color.",
            },
            {
              icon: Shield,
              color: "text-primary",
              border: "border-primary/30",
              glow: "bg-primary/10",
              title: "Fortification",
              desc: "Adjacent friendly hexes share defense stats. A lone hex is easily taken. A cluster of 10 is a fortress requiring sustained assault.",
            },
            {
              icon: AlertTriangle,
              color: "text-amber-500 dark:text-[hsl(77_100%_59%)]",
              border: "border-amber-500/30 dark:border-[hsl(77_100%_59%)]/30",
              glow: "bg-amber-500/10 dark:bg-[hsl(77_100%_59%)]/10",
              title: "Decay",
              desc: "Hexes lose strength over time. If not visited by your faction within 72 hours, they revert to neutral grey.",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-6 bg-card border ${card.border} rounded-xl relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${card.glow} rounded-full blur-2xl`}></div>
                <Icon className={`w-8 h-8 ${card.color} mb-4`} />
                <h3 className="text-lg font-bold uppercase mb-2">{card.title}</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Live Intel Feed */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-muted/20 border border-border p-6 md:p-8 rounded-xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase mb-6">Live Intel Feed</h2>
          <div className="space-y-3 font-mono text-sm">
            {feedItems.map((item, i) => (
              <div
                key={i}
                className={`p-4 bg-background border border-border rounded-lg ${item.faded ? "opacity-50" : ""}`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className={`font-bold shrink-0 ${item.typeClass}`}>{item.type}</span>
                    <span className="leading-snug text-foreground/80">
                      {item.message}
                      {item.location && (
                        <> <span className="text-primary font-bold">{item.location}</span></>
                      )}
                      {item.suffix && <> {item.suffix}</>}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs shrink-0 self-center">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
