import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar, MobileMenuProvider, useMobileMenu } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ZRP from "@/pages/ZRP";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/zrp" component={ZRP} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const { isOpen } = useMobileMenu();

  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{
        transform: isOpen ? "translateX(-70vw)" : "translateX(0)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MobileMenuProvider>
          <AppContent />
        </MobileMenuProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
