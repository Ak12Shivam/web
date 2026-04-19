import { Layout } from "@/components/layout";
import { Calendar, MapPin, Trophy, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const tournaments = [
  {
    status: "LIVE NOW",
    statusClass: "bg-primary/20 border-primary/50 text-primary",
    dotClass: "bg-primary",
    borderClass: "border-primary",
    glowClass: "bg-primary/10",
    title: "Operation: Gridlock",
    meta: [
      { icon: MapPin, text: "Global" },
      { icon: Calendar, text: "Ends in 48h" },
      { icon: Trophy, text: "Exclusive Title", highlight: true },
    ],
    desc: "All factions compete to hold the most territory within major downtown districts. Points are multiplied 3x in dense urban cores.",
    cta: "Deploy Now",
    ctaDisabled: false,
  },
  {
    status: "UPCOMING",
    statusClass: "bg-muted border-border text-muted-foreground",
    dotClass: null,
    borderClass: "border-border",
    glowClass: null,
    title: "Neon Sprint",
    meta: [
      { icon: MapPin, text: "Regional — Runners Only" },
      { icon: Calendar, text: "Starts May 15" },
    ],
    desc: "Runner-exclusive tournament focusing on rapid captures over short distances. Speed bonuses active throughout.",
    cta: "Coming Soon",
    ctaDisabled: true,
  },
  {
    status: "UPCOMING",
    statusClass: "bg-muted border-border text-muted-foreground",
    dotClass: null,
    borderClass: "border-border",
    glowClass: null,
    title: "Walker's Kingdom",
    meta: [
      { icon: MapPin, text: "Global — Walkers Only" },
      { icon: Calendar, text: "Starts June 1" },
    ],
    desc: "Who can build the biggest unbroken territory cluster? Walkers compete over 7 days to create the largest contiguous zone.",
    cta: "Coming Soon",
    ctaDisabled: true,
  },
];

export default function Tournaments() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Operations</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Live Operations</h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-mono">High-stakes city tournaments.</p>
        </motion.div>

        <div className="space-y-6">
          {tournaments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border ${t.borderClass} p-6 sm:p-8 rounded-xl relative overflow-hidden`}
            >
              {t.glowClass && (
                <div className={`absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 ${t.glowClass} rounded-full blur-3xl pointer-events-none`}></div>
              )}

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${t.statusClass} text-xs font-mono mb-5`}>
                {t.dotClass && <span className={`w-2 h-2 rounded-full ${t.dotClass} animate-pulse`}></span>}
                {t.status}
              </div>

              <h2 className={`text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3 ${t.ctaDisabled ? "opacity-70" : ""}`}>
                {t.title}
              </h2>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-sm font-mono text-muted-foreground">
                {t.meta.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.text} className={`flex items-center gap-2 ${m.highlight ? "text-yellow-500" : ""}`}>
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{m.text}</span>
                    </div>
                  );
                })}
              </div>

              <p className={`max-w-2xl mb-6 leading-relaxed font-mono text-sm ${t.ctaDisabled ? "text-muted-foreground" : ""}`}>
                {t.desc}
              </p>

              {t.ctaDisabled ? (
                <button disabled className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border bg-muted/50 text-muted-foreground font-bold uppercase tracking-wider text-sm cursor-not-allowed">
                  <Lock className="w-4 h-4" />
                  {t.cta}
                </button>
              ) : (
                <Button size="lg" className="font-bold uppercase tracking-widest text-sm px-8">
                  {t.cta}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-5 bg-muted/30 border border-border rounded-xl font-mono text-xs text-muted-foreground text-center"
        >
          New operations are added every week. All prizes are digital in-game items. Tournament entry is free.
        </motion.div>
      </div>
    </Layout>
  );
}
