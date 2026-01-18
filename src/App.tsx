import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Legacy pages
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// RU Pages
import HomeRu from "./pages/ru/HomeRu";
import AboutRu from "./pages/ru/AboutRu";
import ContactsRu from "./pages/ru/ContactsRu";
import InsightsRu from "./pages/ru/InsightsRu";
import InvestmentRaisingRu from "./pages/ru/services/InvestmentRaisingRu";
import MARu from "./pages/ru/services/MARu";
import InvestmentSupportRu from "./pages/ru/services/InvestmentSupportRu";
import InternationalLawyerRu from "./pages/ru/services/InternationalLawyerRu";
import ArbitrationRu from "./pages/ru/services/ArbitrationRu";

// EN Pages
import HomeEn from "./pages/en/HomeEn";
import AboutEn from "./pages/en/AboutEn";
import ContactsEn from "./pages/en/ContactsEn";
import InsightsEn from "./pages/en/InsightsEn";
import InvestmentRaisingEn from "./pages/en/services/InvestmentRaisingEn";
import MAEn from "./pages/en/services/MAEn";
import InvestmentSupportEn from "./pages/en/services/InvestmentSupportEn";
import InternationalLawyerEn from "./pages/en/services/InternationalLawyerEn";
import ArbitrationEn from "./pages/en/services/ArbitrationEn";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Root redirects to RU */}
            <Route path="/" element={<Navigate to="/ru" replace />} />
            
            {/* RU Routes */}
            <Route path="/ru" element={<HomeRu />} />
            <Route path="/ru/privlechenie-investitsiy" element={<InvestmentRaisingRu />} />
            <Route path="/ru/sdelki-m-a" element={<MARu />} />
            <Route path="/ru/yuridicheskoe-soprovozhdenie-investitsiy" element={<InvestmentSupportRu />} />
            <Route path="/ru/mezhdunarodnyy-yurist-rossiya" element={<InternationalLawyerRu />} />
            <Route path="/ru/arbitrazhnye-spory" element={<ArbitrationRu />} />
            <Route path="/ru/o-nas" element={<AboutRu />} />
            <Route path="/ru/kontakty" element={<ContactsRu />} />
            <Route path="/ru/insights" element={<InsightsRu />} />

            {/* EN Routes */}
            <Route path="/en" element={<HomeEn />} />
            <Route path="/en/investment-raising" element={<InvestmentRaisingEn />} />
            <Route path="/en/m-a-legal-advisory" element={<MAEn />} />
            <Route path="/en/investment-legal-support" element={<InvestmentSupportEn />} />
            <Route path="/en/international-lawyer-russia" element={<InternationalLawyerEn />} />
            <Route path="/en/arbitration-disputes" element={<ArbitrationEn />} />
            <Route path="/en/about" element={<AboutEn />} />
            <Route path="/en/contacts" element={<ContactsEn />} />
            <Route path="/en/insights" element={<InsightsEn />} />

            {/* Legacy routes */}
            <Route path="/policy" element={<PrivacyPolicy />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
