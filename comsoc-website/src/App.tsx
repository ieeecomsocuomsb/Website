import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Committee from "./pages/Committee";
import NotFound from "./pages/NotFound";
import AGMEvent from "./pages/events/AGMEvent";
import FieldVisitEvent from "./pages/events/FieldVisitEvent";
import ComFix24Event from "./pages/events/ComFix24Event";
import ComFix25Event from "./pages/events/ComFix25Event";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/agm" element={<AGMEvent />} />
          <Route path="/events/field-visit" element={<FieldVisitEvent />} />
          <Route path="/events/comfix-24" element={<ComFix24Event />} />
          <Route path="/events/comfix-25" element={<ComFix25Event />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
