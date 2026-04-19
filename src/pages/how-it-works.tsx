import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Map, Zap, Shield, Users } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Enter the Grid",
    desc: "The entire real world is divided into hexagons, approximately 50 meters wide. Open the app, and you instantly see the grid overlaying your city map. Empty hexes are grey. Captured hexes glow with faction colors.",
    icon: Map,
    visual: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-xl"></div>
        <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-primary hex-clip bg-primary/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-12 h-14 border border-border/50 hex-clip bg-muted/40"></div>
        <div className="absolute bottom-4 right-4 w-12 h-14 border border-border/50 hex-clip bg-muted/40"></div>
        <div className="absolute top-4 right-8 w-12 h-14 border border-[hsl(15_100%_55%)]/60 hex-clip bg-[hsl(15_100%_55%)]/20 dark:border-[hsl(15_100%_64%)]/60 dark:bg-[hsl(15_100%_64%)]/20"></div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Physical Capture",
    desc: "You must physically enter a hex to capture it. The app tracks your GPS. The moment you cross the threshold, the hex flashes and turns your color. Your speed determines your capture strength.",
    icon: Zap,
    visual: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-xl"></div>
        <div className="w-20 h-20 sm:w-28 sm:h-28 border-2 border-primary hex-clip bg-primary/30 flex items-center justify-center">
          <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
        </div>
        <div className="absolute inset-0 animate-ping rounded-xl border-2 border-primary/20 pointer-events-none" style={{ animationDuration: "2s" }}></div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Defend Your Territory",
    desc: "Adjacent hexes reinforce each other. The more territory your faction holds in a cluster, the harder it is for enemies to break through. Walkers build the strongest fortresses; runners are fastest to respond.",
    icon: Shield,
    visual: (
      <div className="relative flex items-center justify-center w-full h-full gap-1 sm:gap-2">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-xl"></div>
        {[
          "bg-[hsl(180_100%_32%)]/40 border-[hsl(180_100%_32%)] dark:bg-[hsl(180_100%_41%)]/40 dark:border-[hsl(180_100%_41%)]",
          "bg-[hsl(180_100%_32%)]/60 border-[hsl(180_100%_32%)] dark:bg-[hsl(180_100%_41%)]/60 dark:border-[hsl(180_100%_41%)]",
          "bg-[hsl(180_100%_32%)]/40 border-[hsl(180_100%_32%)] dark:bg-[hsl(180_100%_41%)]/40 dark:border-[hsl(180_100%_41%)]",
        ].map((cls, i) => (
          <div key={i} className={`w-14 h-16 sm:w-20 sm:h-24 border-2 hex-clip ${cls} ${i === 1 ? "-mt-0 scale-110" : ""}`}></div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    title: "Join a Clan",
    desc: "The best strategies combine all three modes. Cyclists scout, runners strike, walkers fortify. Form or join a mixed-mode clan and coordinate attacks and defenses across your whole city.",
    icon: Users,
    visual: (
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-2">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-xl"></div>
        {[
          { label: "Runner", cls: "bg-[hsl(15_100%_55%)]/30 border-[hsl(15_100%_55%)] dark:bg-[hsl(15_100%_64%)]/30 dark:border-[hsl(15_100%_64%)]" },
          { label: "Walker", cls: "bg-[hsl(180_100%_32%)]/30 border-[hsl(180_100%_32%)] dark:bg-[hsl(180_100%_41%)]/30 dark:border-[hsl(180_100%_41%)]" },
          { label: "Cyclist", cls: "bg-[hsl(77_80%_40%)]/30 border-[hsl(77_80%_40%)] dark:bg-[hsl(77_100%_59%)]/30 dark:border-[hsl(77_100%_59%)]" },
        ].map((m) => (
          <div key={m.label} className={`w-32 sm:w-40 px-3 py-1.5 rounded border ${m.cls} font-mono text-xs font-bold uppercase tracking-wider text-center`}>
            {m.label}
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Field Manual</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Mechanics Briefing</h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-mono">How to conquer the grid.</p>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.section
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Visual — always first on mobile, alternates on desktop */}
                <div className={`${isEven ? "order-1 md:order-2" : "order-1"}`}>
                  <div className="w-full max-w-sm mx-auto md:max-w-none aspect-video sm:aspect-square bg-muted/30 border border-border rounded-xl overflow-hidden p-4 sm:p-6">
                    {step.visual}
                  </div>
                </div>

                {/* Text */}
                <div className={`${isEven ? "order-2 md:order-1" : "order-2"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary font-bold font-mono text-sm shrink-0">
                      {step.num}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">{step.title}</h2>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
