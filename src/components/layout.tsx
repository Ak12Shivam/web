import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useMode } from "./mode-provider";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import logoImg from "/runwars-logo.png";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { mode } = useMode();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Ops Center" },
    { href: "/how-it-works", label: "Mechanics" },
    { href: "/conflict", label: "Conflict" },
    { href: "/clans", label: "Clans" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/tournaments", label: "Tournaments" },
    { href: "/premium", label: "Premium" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={logoImg}
              alt="RunWars Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-cover"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tighter uppercase font-mono">
              RUN<span className="text-primary">WARS</span>
            </span>
          </Link>

          {/* Desktop Nav — only visible at lg+ */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs xl:text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary whitespace-nowrap ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme toggle — always visible */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* SYS: ONLINE — desktop only */}
            <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-border text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
              <span className="hidden xl:inline">SYS: ONLINE</span>
            </div>

            {/* Hamburger — visible below lg */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Nav Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-b border-border bg-background/95 backdrop-blur-md overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider px-3 py-2.5 rounded-md transition-colors ${
                      location === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-border flex items-center gap-2 px-3 text-xs font-mono text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  SYS: ONLINE
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 flex flex-col min-w-0">{children}</main>

      <footer className="border-t border-border bg-card py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <div className="flex items-center gap-2">
                <img src={logoImg} alt="RunWars Logo" className="w-7 h-7 rounded object-cover" />
                <span className="font-bold text-xl tracking-tighter uppercase font-mono">
                  RUN<span className="text-primary">WARS</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs text-center lg:text-left leading-relaxed">
                Your city is the battlefield. Your movement is the weapon.
              </p>
              <p className="text-muted-foreground text-xs font-mono">
                &copy; {new Date().getFullYear()} RunWars. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-mono uppercase text-muted-foreground justify-center lg:justify-end">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/vote" className="hover:text-primary transition-colors">Vote</Link>
              <Link href="/how-it-works" className="hover:text-primary transition-colors">Mechanics</Link>
              <Link href="/clans" className="hover:text-primary transition-colors">Clans</Link>
              <Link href="/premium" className="hover:text-primary transition-colors">Premium</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
