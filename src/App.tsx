import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Layout } from "@/components/Layout";
import { ROUTE_PATHS } from "@/lib/index";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

/**
 * Component to handle scroll restoration on route changes.
 * Ensures that users start at the top of the page when navigating.
 */
function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Main Application Component
 * Sets up the routing, global providers, and core layout structure.
 * © 2026 NavLakshya - Streamcore Web Pvt Ltd
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              {/* Main Navigation Routes */}
              <Route 
                path={ROUTE_PATHS.HOME} 
                element={<Home />} 
              />
              <Route 
                path={ROUTE_PATHS.PROGRAMS} 
                element={<Programs />} 
              />
              <Route 
                path={ROUTE_PATHS.ABOUT} 
                element={<About />} 
              />
              <Route 
                path={ROUTE_PATHS.CONTACT} 
                element={<Contact />} 
              />

              {/* 
                Catch-all route for undefined paths. 
                Redirects back to Home or a potential 404 page.
              */}
              <Route 
                path="*" 
                element={<Home />} 
              />
            </Routes>
          </Layout>
        </BrowserRouter>

        {/* UI Feedback Components */}
        <Toaster />
        <Sonner 
          position="top-right" 
          expand={false} 
          richColors 
          closeButton
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
