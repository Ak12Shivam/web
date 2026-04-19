import { Layout } from "@/components/layout";
import { HexGrid } from "@/components/hex-grid";
import { ModeSwitcher } from "@/components/mode-switcher";
import { StatCounter } from "@/components/stat-counter";
import { useMode } from "@/components/mode-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Crosshair, ShieldAlert, Navigation } from "lucide-react";
import { Link } from "wouter";

const messaging = {
  runner: {
    headline: "Build an unbreakable fortress.",
    subheadline: "Every run is a battle. Capture zones fast and aggressively.",
  },
  walker: {
    headline: "Claim your city one step at a time.",
    subheadline: "No pressure, pure strategy. Build massive contiguous territories.",
  },
  cyclist: {
    headline: "Paint the entire city in one ride.",
    subheadline: "Control the map. Rapid expansion across major arteries.",
  },
};

export default function Home() {
  const { mode } = useMode();
  const content = messaging[mode];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <HexGrid className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/75 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-xs font-mono mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            GLOBAL ALPHA NOW LIVE
          </motion.div>

          <motion.h1
            key={content.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter max-w-4xl mb-6 text-foreground drop-shadow-lg"
          >
            {content.headline}
          </motion.h1>

          <motion.p
            key={content.subheadline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-mono"
          >
            {content.subheadline}
          </motion.p>

          <div className="w-full max-w-2xl mb-12">
            <ModeSwitcher />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md sm:max-w-none sm:w-auto"
          >
            <button
              disabled
              className="flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider rounded-lg border border-border bg-muted/50 text-muted-foreground cursor-not-allowed select-none w-full sm:w-auto"
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Coming Soon &mdash; Download App</span>
            </button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider group w-full sm:w-auto"
              asChild
            >
              <Link href="/how-it-works">
                View Briefing
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-xs font-mono text-muted-foreground"
          >
            App launching soon for iOS &amp; Android &mdash;{" "}
            <Link href="/vote" className="text-primary hover:underline">
              vote to support the launch
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-8 sm:pt-0 first:pt-0">
              <StatCounter value={54200} label="Active Operatives" />
            </div>
            <div className="pt-8 sm:pt-0">
              <StatCounter value={2300000} label="Hexes Captured Today" />
            </div>
            <div className="pt-8 sm:pt-0">
              <StatCounter value={128} label="Cities In Conflict" />
            </div>
          </div>
        </div>
      </section>

      {/* Mechanic teasers */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              The Theatre of War
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto text-sm sm:text-base">
              Three factions. One map. Constant conflict.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Crosshair,
                color: "text-[hsl(15_100%_55%)] dark:text-[hsl(15_100%_64%)]",
                glow: "bg-[hsl(15_100%_55%)]/10 dark:bg-[hsl(15_100%_64%)]/10",
                title: "Runner Assaults",
                desc: "Fast, surgical strikes. Runners capture hexes instantly but struggle to hold large areas without clan support.",
              },
              {
                icon: ShieldAlert,
                color: "text-[hsl(180_100%_32%)] dark:text-[hsl(180_100%_41%)]",
                glow: "bg-[hsl(180_100%_32%)]/10 dark:bg-[hsl(180_100%_41%)]/10",
                title: "Walker Fortresses",
                desc: "Slow expansion, impenetrable defense. Walkers link hexes to create reinforced zones extremely difficult to break.",
              },
              {
                icon: Navigation,
                color: "text-[hsl(77_80%_40%)] dark:text-[hsl(77_100%_59%)]",
                glow: "bg-[hsl(77_80%_40%)]/10 dark:bg-[hsl(77_100%_59%)]/10",
                title: "Cyclist Raids",
                desc: "Massive area denial. Cyclists cut off supply lines and claim vast swathes of empty territory in a single ride.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-card border border-border p-6 sm:p-8 rounded-xl relative group overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${card.glow} rounded-full blur-3xl group-hover:opacity-150 transition-opacity`}></div>
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${card.color} mb-5`} />
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-3">{card.title}</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/conflict">Explore the Warfare System</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App CTA banner */}
      <section className="py-16 md:py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
            Ready to Claim Your City?
          </h2>
          <p className="text-muted-foreground font-mono text-sm sm:text-base mb-8">
            RunWars is in active development. Join thousands already on the waitlist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="font-bold uppercase tracking-wider" asChild>
              <Link href="/vote">Support the Launch</Link>
            </Button>
            <Button size="lg" variant="outline" className="font-bold uppercase tracking-wider" asChild>
              <Link href="/premium">View Premium</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
