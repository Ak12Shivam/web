import { Layout } from "@/components/layout";
import { Users, Crown, Activity, Footprints, Bike, Shield, Zap, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Clans() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Team Warfare</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Clan Warfare</h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-mono">Lone wolves die. Packs conquer.</p>
        </motion.div>

        {/* Combined Arms section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-4 md:mb-6">Combined Arms</h2>
            <p className="text-muted-foreground font-mono leading-relaxed mb-6 text-sm sm:text-base">
              The most dominant clans don't restrict themselves to one mode. A successful clan uses Cyclists to scout and disrupt enemy lines, Runners for surgical strikes on key landmarks, and Walkers to slowly build massive, heavily fortified home territories.
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                <Bike className="w-5 h-5 text-[hsl(77_80%_40%)] dark:text-[hsl(77_100%_59%)] shrink-0" />
                <div>
                  <div className="font-bold">Cyclists</div>
                  <div className="text-muted-foreground text-xs">Recon &amp; Disruption</div>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                <Activity className="w-5 h-5 text-[hsl(15_100%_55%)] dark:text-[hsl(15_100%_64%)] shrink-0" />
                <div>
                  <div className="font-bold">Runners</div>
                  <div className="text-muted-foreground text-xs">Shock Troops &amp; Rapid Capture</div>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                <Footprints className="w-5 h-5 text-[hsl(180_100%_32%)] dark:text-[hsl(180_100%_41%)] shrink-0" />
                <div>
                  <div className="font-bold">Walkers</div>
                  <div className="text-muted-foreground text-xs">Fortress Builders &amp; Defenders</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-6 sm:p-8 rounded-xl shadow-xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-3 min-w-0">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 shrink-0" />
                <span className="font-bold text-base sm:text-lg truncate">NIGHTCRAWLERS</span>
              </div>
              <span className="font-mono text-primary text-sm shrink-0 ml-2">RANK #1</span>
            </div>
            <div className="space-y-3 mb-6 font-mono text-sm">
              {[
                { label: "Members", value: "42 / 50" },
                { label: "Territory", value: "12,450 Hexes" },
                { label: "Home City", value: "Seattle, WA" },
                { label: "Win Rate", value: "73%" },
                { label: "Founded", value: "Season 1" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-bold text-right">{row.value}</span>
                </div>
              ))}
            </div>
            <Button className="w-full uppercase font-bold tracking-widest text-sm">Apply to Join</Button>
          </motion.div>
        </div>

        {/* Strategy tiles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-center">Clan Strategy System</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Map, title: "Territory Maps", desc: "View your clan's full territorial control in real time. Plan expansion together." },
              { icon: Shield, title: "Coordinated Defense", desc: "Alert all members when sectors are under attack. Rally to defend key zones." },
              { icon: Zap, title: "Raid Planning", desc: "Schedule coordinated multi-member raids on high-value enemy strongholds." },
            ].map((tile) => {
              const Icon = tile.icon;
              return (
                <div key={tile.title} className="bg-muted/30 border border-border rounded-xl p-5">
                  <Icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-bold uppercase text-sm mb-2">{tile.title}</h3>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">{tile.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </Layout>
  );
}
