import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Lock, Check, Clock } from "lucide-react";

const tiers = [
  {
    name: "Vanguard",
    subtitle: "For aggressive runners.",
    color: "hsl(15 100% 64%)",
    colorClass: "text-[hsl(15_100%_64%)]",
    glowClass: "bg-[hsl(15_100%_64%)]/10",
    borderClass: "border-border",
    features: [
      "Advanced pace analytics",
      "Custom hex glow effects",
      "Real-time conflict alerts",
      "Attack speed boosts",
      "Fortress shield tokens",
    ],
  },
  {
    name: "Commander",
    subtitle: "For clan leaders and strategists.",
    color: "var(--color-primary)",
    colorClass: "text-primary",
    glowClass: "bg-primary/10",
    borderClass: "border-primary",
    featured: true,
    features: [
      "Global heatmap access",
      "Clan management dashboard",
      "Decay prediction timers",
      "Priority tournament entry",
      "All Vanguard & Recon perks",
    ],
  },
  {
    name: "Recon",
    subtitle: "For long-distance cyclists.",
    color: "hsl(77 100% 59%)",
    colorClass: "text-[hsl(77_100%_59%)]",
    glowClass: "bg-[hsl(77_100%_59%)]/10",
    borderClass: "border-border",
    features: [
      "Route planning overlay",
      "Offline map downloads",
      "Supply line optimization",
      "Trail blitz speed boosts",
      "Stealth ride mode",
    ],
  },
];

export default function Premium() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-primary">
            Black Ops Access
          </h1>
          <p className="text-xl text-muted-foreground font-mono">Unlock advanced tactical tools.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-16 px-6 py-4 bg-muted/50 border border-border rounded-xl max-w-lg mx-auto"
        >
          <Clock className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm font-mono text-muted-foreground text-center">
            Pricing will be revealed at launch. Join the{" "}
            <a href="/vote" className="text-primary hover:underline">waitlist</a>
            {" "}for early-access rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`bg-card border ${tier.borderClass} p-8 rounded-xl flex flex-col relative overflow-hidden ${
                tier.featured ? "md:-translate-y-4 shadow-2xl" : ""
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`absolute top-0 right-0 w-32 h-32 ${tier.glowClass} rounded-full blur-3xl`} />

              <h3 className={`text-2xl font-bold uppercase mb-2 ${tier.colorClass}`}>{tier.name}</h3>
              <p className="text-muted-foreground font-mono text-sm mb-6">{tier.subtitle}</p>

              <div className="flex items-center gap-3 mb-8 p-4 bg-muted/40 rounded-lg border border-border">
                <Lock className={`w-5 h-5 ${tier.colorClass} shrink-0`} />
                <div>
                  <div className="text-lg font-bold font-mono text-foreground">Price TBA</div>
                  <div className="text-xs font-mono text-muted-foreground">Revealed at launch</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1 font-mono text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={`w-5 h-5 ${tier.colorClass} shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="w-full py-3 px-4 rounded-lg border border-border bg-muted/50 text-muted-foreground font-bold uppercase tracking-wider text-sm cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4" />
                Coming Soon
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 bg-card border border-border rounded-xl"
        >
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-3">Be First to Know</h2>
          <p className="text-muted-foreground font-mono text-sm mb-6 max-w-md mx-auto">
            Early supporters get exclusive pricing locked in for life. Pricing drops the moment RunWars launches.
          </p>
          <a
            href="/vote"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Support the Launch
          </a>
        </motion.div>
      </div>
    </Layout>
  );
}
