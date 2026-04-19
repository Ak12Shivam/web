import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ModeProvider } from "@/components/mode-provider";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import HowItWorks from "@/pages/how-it-works";
import Conflict from "@/pages/conflict";
import Clans from "@/pages/clans";
import Leaderboard from "@/pages/leaderboard";
import Premium from "@/pages/premium";
import Tournaments from "@/pages/tournaments";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Vote from "@/pages/vote";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/conflict" component={Conflict} />
      <Route path="/clans" component={Clans} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/premium" component={Premium} />
      <Route path="/tournaments" component={Tournaments} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/vote" component={Vote} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <ModeProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
          </ModeProvider>
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
