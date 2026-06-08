import { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ContestPopup } from "@/components/ContestPopup";
import Home from "@/pages/Home";
import ZRP from "@/pages/ZRP";
import NosProduits from "@/pages/NosProduits";
import ProductDetail from "@/pages/ProductDetail";
import Certifications from "@/pages/Certifications";
import NotreHistoire from "@/pages/NotreHistoire";
import NosValeurs from "@/pages/NosValeurs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/zrp" component={ZRP} />
      <Route path="/nos-produits/:slug" component={ProductDetail} />
      <Route path="/nos-produits" component={NosProduits} />
      <Route path="/nos-engagements-rse" component={Certifications} />
      <Route path="/certifications">
        {() => <Redirect to="/nos-engagements-rse" />}
      </Route>
      <Route path="/notre-histoire" component={NotreHistoire} />
      <Route path="/nos-valeurs" component={NosValeurs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans w-full max-w-full overflow-x-hidden">
          <Navbar />
          <div className="flex-1 flex flex-col w-full overflow-x-hidden">
            <Router />
          </div>
          <Footer />
        </div>
        <CookieConsent />
        <ContestPopup />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
