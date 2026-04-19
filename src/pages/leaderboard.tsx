import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Activity, Footprints, Bike } from "lucide-react";
import { motion } from "framer-motion";

const allData = [
  { rank: 1, name: "GhostRunner", score: 14500, mode: "runner", clan: "Nightcrawlers" },
  { rank: 2, name: "UrbanHiker", score: 13200, mode: "walker", clan: "Concrete" },
  { rank: 3, name: "SpokeDemon", score: 12800, mode: "cyclist", clan: "Velo" },
  { rank: 4, name: "NeonPulse", score: 11400, mode: "runner", clan: "Nightcrawlers" },
  { rank: 5, name: "TreadHeavy", score: 10900, mode: "walker", clan: "Concrete" },
  { rank: 6, name: "SilentGear", score: 10100, mode: "cyclist", clan: "Velo" },
  { rank: 7, name: "IronStride", score: 9800, mode: "runner", clan: "Apex" },
  { rank: 8, name: "PavementQueen", score: 9200, mode: "walker", clan: "Concrete" },
];

const modeIcon = (mode: string) => {
  if (mode === "runner") return <Activity className="w-4 h-4 text-[hsl(15_100%_55%)] dark:text-[hsl(15_100%_64%)] shrink-0" />;
  if (mode === "walker") return <Footprints className="w-4 h-4 text-[hsl(180_100%_32%)] dark:text-[hsl(180_100%_41%)] shrink-0" />;
  return <Bike className="w-4 h-4 text-[hsl(77_80%_40%)] dark:text-[hsl(77_100%_59%)] shrink-0" />;
};

function LeaderTable({ rows }: { rows: typeof allData }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left font-mono text-sm min-w-[400px]">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 font-bold uppercase tracking-widest text-muted-foreground text-xs">Rank</th>
              <th className="px-4 py-3 font-bold uppercase tracking-widest text-muted-foreground text-xs">Operative</th>
              <th className="px-4 py-3 font-bold uppercase tracking-widest text-muted-foreground text-xs hidden sm:table-cell">Clan</th>
              <th className="px-4 py-3 font-bold uppercase tracking-widest text-muted-foreground text-xs text-right">Score</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.rank}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-border/50 hover:bg-muted/20 transition-colors"
              >
                <td className="px-4 py-3 text-muted-foreground">
                  {row.rank <= 3 ? (
                    <span className={`font-bold ${row.rank === 1 ? "text-yellow-500" : row.rank === 2 ? "text-slate-400" : "text-amber-600"}`}>
                      #{row.rank}
                    </span>
                  ) : (
                    <span>#{row.rank}</span>
                  )}
                </td>
                <td className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-2">
                    {modeIcon(row.mode)}
                    <span>{row.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{row.clan}</td>
                <td className="px-4 py-3 text-right text-primary font-bold">{row.score.toLocaleString()}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-4xl">
        <div className="flex items-start sm:items-center justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Global Rankings</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-2">City Rankings</h1>
            <p className="text-muted-foreground font-mono text-sm">Global Season 1 &mdash; Ends in 12 days</p>
          </div>
          <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 opacity-50 shrink-0" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          {/* Horizontally scrollable tab list on mobile */}
          <div className="overflow-x-auto pb-1 mb-6">
            <TabsList className="inline-flex w-auto min-w-full sm:w-full bg-muted/50 border border-border h-auto p-1 gap-1">
              <TabsTrigger value="all" className="uppercase font-mono text-xs px-4 sm:px-6 py-2.5 data-[state=active]:bg-background whitespace-nowrap flex-1 sm:flex-none">
                All Modes
              </TabsTrigger>
              <TabsTrigger value="runners" className="uppercase font-mono text-xs px-4 sm:px-6 py-2.5 data-[state=active]:bg-background whitespace-nowrap flex-1 sm:flex-none data-[state=active]:text-[hsl(15_100%_55%)]">
                <Activity className="w-3.5 h-3.5 mr-1.5 inline-block" />Runners
              </TabsTrigger>
              <TabsTrigger value="walkers" className="uppercase font-mono text-xs px-4 sm:px-6 py-2.5 data-[state=active]:bg-background whitespace-nowrap flex-1 sm:flex-none data-[state=active]:text-[hsl(180_100%_32%)]">
                <Footprints className="w-3.5 h-3.5 mr-1.5 inline-block" />Walkers
              </TabsTrigger>
              <TabsTrigger value="cyclists" className="uppercase font-mono text-xs px-4 sm:px-6 py-2.5 data-[state=active]:bg-background whitespace-nowrap flex-1 sm:flex-none data-[state=active]:text-[hsl(77_80%_40%)]">
                <Bike className="w-3.5 h-3.5 mr-1.5 inline-block" />Cyclists
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <LeaderTable rows={allData} />
          </TabsContent>
          <TabsContent value="runners">
            <LeaderTable rows={allData.filter(r => r.mode === "runner")} />
          </TabsContent>
          <TabsContent value="walkers">
            <LeaderTable rows={allData.filter(r => r.mode === "walker")} />
          </TabsContent>
          <TabsContent value="cyclists">
            <LeaderTable rows={allData.filter(r => r.mode === "cyclist")} />
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-muted/30 border border-border rounded-lg font-mono text-xs text-muted-foreground text-center">
          Rankings update every 15 minutes. Season resets on June 1, 2025.
        </div>
      </div>
    </Layout>
  );
}
