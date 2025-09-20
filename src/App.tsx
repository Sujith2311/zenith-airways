import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AirlineLayout from "@/components/AirlineLayout";
import Dashboard from "@/components/Dashboard";
import CrewHub from "@/components/CrewHub";
import AircraftOperations from "@/components/AircraftOperations";
import StationOperations from "@/components/StationOperations";
import GateOperations from "@/components/GateOperations";
import WeatherCenter from "@/components/WeatherCenter";
import AlertCenter from "@/components/AlertCenter";
import SecurityCenter from "@/components/SecurityCenter";
import AnalyticsHub from "@/components/AnalyticsHub";
import SystemSettings from "@/components/SystemSettings";
import SafetyCenter from "@/components/SafetyCenter";
import SecurityIncidentTrends from "@/components/SecurityIncidentTrends";
import ResponsePerformance from "@/components/ResponsePerformance";
import InteractiveWeatherRadar from "@/components/InteractiveWeatherRadar";
import RouteOptimization from "@/components/RouteOptimization";
import CrewProfileDetail from "@/components/CrewProfileDetail";
import AircraftDetail from "@/components/AircraftDetail";
import FuelConsumptionHistory from "@/components/FuelConsumptionHistory";
import InteractiveWeatherRadarFull from "@/components/InteractiveWeatherRadarFull";
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
          <Route path="/operations" element={<AirlineLayout><StationOperations /></AirlineLayout>} />
          <Route path="/alerts" element={<AirlineLayout><AlertCenter /></AirlineLayout>} />
          <Route path="/aircraft" element={<AirlineLayout><AircraftOperations /></AirlineLayout>} />
          <Route path="/gates" element={<AirlineLayout><GateOperations /></AirlineLayout>} />
          <Route path="/weather" element={<AirlineLayout><WeatherCenter /></AirlineLayout>} />
          <Route path="/security" element={<AirlineLayout><SecurityCenter /></AirlineLayout>} />
          <Route path="/analytics" element={<AirlineLayout><AnalyticsHub /></AirlineLayout>} />
          <Route path="/settings" element={<AirlineLayout><SystemSettings /></AirlineLayout>} />
          <Route path="/safety-center" element={<AirlineLayout><SafetyCenter /></AirlineLayout>} />
          <Route path="/security-incidents" element={<AirlineLayout><SecurityIncidentTrends /></AirlineLayout>} />
          <Route path="/response-performance" element={<AirlineLayout><ResponsePerformance /></AirlineLayout>} />
          <Route path="/weather-radar" element={<AirlineLayout><InteractiveWeatherRadar /></AirlineLayout>} />
          <Route path="/route-optimization" element={<AirlineLayout><RouteOptimization /></AirlineLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
