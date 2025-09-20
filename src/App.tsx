import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AirlineLayout from "@/components/AirlineLayout";
import Dashboard from "@/components/Dashboard";
import CrewHub from "@/components/CrewHub";
import AircraftOperations from "@/components/AircraftOperations";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AirlineLayout><Dashboard /></AirlineLayout>} />
          <Route path="/crew" element={<AirlineLayout><CrewHub /></AirlineLayout>} />
          <Route path="/operations" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">Station Operations</h1><p className="text-muted-foreground">Real-time aircraft tracking and operations dashboard coming soon...</p></div></AirlineLayout>} />
          <Route path="/alerts" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">Alert Center</h1><p className="text-muted-foreground">Centralized alert management system coming soon...</p></div></AirlineLayout>} />
          <Route path="/aircraft" element={<AirlineLayout><AircraftOperations /></AirlineLayout>} />
          <Route path="/gates" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">Gate Operations</h1><p className="text-muted-foreground">Gate utilization and management dashboard coming soon...</p></div></AirlineLayout>} />
          <Route path="/weather" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">Weather Center</h1><p className="text-muted-foreground">Live weather radar and forecasting coming soon...</p></div></AirlineLayout>} />
          <Route path="/security" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">Security Center</h1><p className="text-muted-foreground">Security monitoring and threat detection coming soon...</p></div></AirlineLayout>} />
          <Route path="/analytics" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">Performance Analytics</h1><p className="text-muted-foreground">Comprehensive analytics and reporting coming soon...</p></div></AirlineLayout>} />
          <Route path="/settings" element={<AirlineLayout><div className="p-8 text-center"><h1 className="text-2xl font-bold">System Settings</h1><p className="text-muted-foreground">Platform configuration and preferences coming soon...</p></div></AirlineLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
