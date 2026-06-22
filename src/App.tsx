import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Legacy pages
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// RU Pages
import HomeRu from "./pages/ru/HomeRu";
import AboutRu from "./pages/ru/AboutRu";
import ContactsRu from "./pages/ru/ContactsRu";
import EmailPrivacyRu from "./pages/ru/EmailPrivacyRu";
import PrivacyPolicyRu from "./pages/ru/PrivacyPolicyRu";
import CookiePolicyRu from "./pages/ru/CookiePolicyRu";
import TemporarySiteHoldRu from "./pages/ru/TemporarySiteHoldRu";
import ConsultationPaymentRu from "./pages/ru/ConsultationPaymentRu";
import ConsultationPaymentRuPayment from "./pages/ru/ConsultationPaymentRuPayment";
import InsightsRu from "./pages/ru/InsightsRu";
import InsightArticleRu from "./pages/ru/InsightArticleRu";
import InvestmentRaisingRu from "./pages/ru/services/InvestmentRaisingRu";
import MARu from "./pages/ru/services/MARu";
import InvestmentSupportRu from "./pages/ru/services/InvestmentSupportRu";
import InternationalLawyerRu from "./pages/ru/services/InternationalLawyerRu";
import ArbitrationRu from "./pages/ru/services/ArbitrationRu";
import RealEstateRu from "./pages/ru/services/RealEstateRu";
import InternationalMigrationCoordinationRu from "./pages/ru/services/InternationalMigrationCoordinationRu";
import InternationalAssetsPageRu from "./pages/ru/services/InternationalAssetsPageRu";

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

const TEMPORARY_SITE_HOLD = true;
const LIVE_LEGAL_ROUTES = new Set([
  "/ru/privacy-policy",
  "/ru/cookie-policy",
  "/ru/email-privacy",
]);

const PublicSiteRoutes = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (TEMPORARY_SITE_HOLD && !LIVE_LEGAL_ROUTES.has(normalizedPath)) {
    return <TemporarySiteHoldRu />;
  }

  return (
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
      <Route path="/ru/nedvizhimost-i-arenda" element={<RealEstateRu />} />
      <Route path="/ru/services/international-migration-coordination" element={<InternationalMigrationCoordinationRu />} />
      <Route path="/ru/mezhdunarodnye-aktivy" element={<InternationalAssetsPageRu pageKey="hub" />} />
      <Route path="/ru/kipr-nedvizhimost-pmzh" element={<InternationalAssetsPageRu pageKey="cyprus" />} />
      <Route path="/ru/gretsiya-vnzh-san-tome-grazhdanstvo" element={<InternationalAssetsPageRu pageKey="greeceSaoTome" />} />
      <Route path="/ru/tailand-phuket-kurortnye-rezidentsii" element={<InternationalAssetsPageRu pageKey="phuket" />} />
      <Route path="/ru/kommercheskaya-nedvizhimost-zarubezhom" element={<InternationalAssetsPageRu pageKey="commercial" />} />
      <Route path="/ru/o-nas" element={<AboutRu />} />
      <Route path="/ru/kontakty" element={<ContactsRu />} />
      <Route path="/ru/email-privacy" element={<EmailPrivacyRu />} />
      <Route path="/ru/privacy-policy" element={<PrivacyPolicyRu />} />
      <Route path="/ru/cookie-policy" element={<CookiePolicyRu />} />
      <Route path="/ru/konsultatsiya-oplata" element={<ConsultationPaymentRu />} />
      <Route path="/ru/konsultatsiya-oplata/oplata" element={<ConsultationPaymentRuPayment />} />
      {/* Short public payment alias */}
      <Route path="/oplata" element={<ConsultationPaymentRuPayment />} />
      <Route path="/ru/insights" element={<InsightsRu />} />
      <Route path="/ru/insights/:slug" element={<InsightArticleRu />} />

      {/* EN Routes — English is temporarily disabled publicly. Do not delete EN pages/content; restore by re-enabling these routes and the LanguageSwitcher in MultilingualHeader. */}
      <Route path="/en" element={<Navigate to="/ru" replace />} />
      <Route path="/en/investment-raising" element={<Navigate to="/ru/privlechenie-investitsiy" replace />} />
      <Route path="/en/m-a-legal-advisory" element={<Navigate to="/ru/sdelki-m-a" replace />} />
      <Route path="/en/investment-legal-support" element={<Navigate to="/ru/yuridicheskoe-soprovozhdenie-investitsiy" replace />} />
      <Route path="/en/international-lawyer-russia" element={<Navigate to="/ru/mezhdunarodnyy-yurist-rossiya" replace />} />
      <Route path="/en/arbitration-disputes" element={<Navigate to="/ru/arbitrazhnye-spory" replace />} />
      <Route path="/en/about" element={<Navigate to="/ru/o-nas" replace />} />
      <Route path="/en/contacts" element={<Navigate to="/ru/kontakty" replace />} />
      <Route path="/en/insights" element={<Navigate to="/ru/insights" replace />} />

      {/* Legacy routes */}
      <Route path="/policy" element={<PrivacyPolicy />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PublicSiteRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
