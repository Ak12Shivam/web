import { Layout } from "@/components/layout";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Globe, TrendingUp, Users } from "lucide-react";

const BASE_VOTES = 84_291;
const STORAGE_KEY = "runwars-vote-count";
const HAS_VOTED_KEY = "runwars-has-voted";

function getStoredVotes(): number {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? parseInt(v, 10) : 0;
  } catch {
    return 0;
  }
}

function setStoredVotes(n: number) {
  try {
    localStorage.setItem(STORAGE_KEY, String(n));
  } catch {}
}

function hasVoted(): boolean {
  try {
    return localStorage.getItem(HAS_VOTED_KEY) === "yes";
  } catch {
    return false;
  }
}

function markVoted() {
  try {
    localStorage.setItem(HAS_VOTED_KEY, "yes");
  } catch {}
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function Vote() {
  const [localVotes, setLocalVotes] = useState<number>(getStoredVotes);
  const [voted, setVoted] = useState<boolean>(hasVoted);
  const [burst, setBurst] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const total = BASE_VOTES + localVotes;

  const handleVote = useCallback(() => {
    if (voted) return;
    const next = localVotes + 1;
    setLocalVotes(next);
    setStoredVotes(next);
    markVoted();
    setVoted(true);
    setBurst(true);
    setParticles(Array.from({ length: 12 }, (_, i) => i));
    setTimeout(() => {
      setBurst(false);
      setParticles([]);
    }, 1200);
  }, [voted, localVotes]);

  useEffect(() => {
    const id = setInterval(() => {
      setLocalVotes((prev) => {
        if (!voted) return prev;
        const drift = Math.random() > 0.7 ? 1 : 0;
        const next = prev + drift;
        setStoredVotes(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [voted]);

  const percentage = Math.min(100, Math.floor((total / 100000) * 100));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Worldwide Support
          </p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Hype The<br />
            <span className="text-primary">Launch</span>
          </h1>
          <p className="text-muted-foreground font-mono max-w-md mx-auto">
            RunWars is coming soon. Show your support and help us reach 100,000 votes worldwide.
            Every vote brings the launch closer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
              <Globe className="w-4 h-4" />
              Worldwide Votes
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={total}
                initial={{ scale: 0.9, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl md:text-8xl font-bold font-mono text-primary mb-2"
              >
                {formatNumber(total)}
              </motion.div>
            </AnimatePresence>

            <div className="text-muted-foreground font-mono text-sm mb-8">
              of 100,000 goal
            </div>

            <div className="w-full bg-muted rounded-full h-3 mb-8 overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />
            </div>

            <div className="relative flex justify-center mb-8">
              <AnimatePresence>
                {particles.map((i) => (
                  <motion.div
                    key={`p-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 0,
                      scale: 1.5,
                      x: (Math.cos((i / 12) * Math.PI * 2) * 80),
                      y: (Math.sin((i / 12) * Math.PI * 2) * 80),
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                ))}
              </AnimatePresence>

              <motion.button
                onClick={handleVote}
                disabled={voted}
                whileHover={!voted ? { scale: 1.05 } : {}}
                whileTap={!voted ? { scale: 0.97 } : {}}
                animate={burst ? { scale: [1, 1.15, 1] } : {}}
                className={`relative flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-bold uppercase tracking-wider transition-all ${
                  voted
                    ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                    : "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50"
                }`}
              >
                <Zap className={`w-6 h-6 ${burst ? "animate-spin" : ""}`} />
                {voted ? "Vote Counted" : "Hype It Up"}
              </motion.button>
            </div>

            {voted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-mono text-sm mb-4"
              >
                Your vote is live worldwide. Thank you, Operative.
              </motion.p>
            )}

            <p className="text-muted-foreground font-mono text-xs">
              One vote per device. Live counter updates in real time.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Users className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-xl font-bold font-mono">{formatNumber(total)}</div>
            <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Total Votes</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Globe className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-xl font-bold font-mono">128</div>
            <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Countries</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-xl font-bold font-mono">{percentage}%</div>
            <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Goal Reached</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-muted/40 border border-border rounded-xl p-6 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Coming Soon</p>
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-2">App Launch Incoming</h2>
          <p className="text-muted-foreground font-mono text-sm max-w-sm mx-auto">
            RunWars is in final development. Join the waitlist and be first to claim territory in your city.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-3 rounded-lg bg-background border border-border text-sm font-mono focus:outline-none focus:border-primary transition-colors w-full sm:w-auto"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
