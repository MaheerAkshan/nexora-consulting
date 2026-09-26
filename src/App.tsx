import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services, servicesData, type ServiceItem } from './components/Services';
import { Approach } from './components/Approach';
import { CaseStudies, type CaseStudyItem } from './components/CaseStudies';
import { WhyUs } from './components/WhyUs';
import { Industries } from './components/Industries';
import { Insights, type ArticleItem } from './components/Insights';
import { StrategyCalculator } from './components/StrategyCalculator';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

export function App() {
  // Modal States
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingAuditScore, setBookingAuditScore] = useState<number | null>(null);

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Triggers
  const handleOpenBooking = (serviceName?: string) => {
    setBookingService(serviceName);
    setBookingAuditScore(null);
    setBookingOpen(true);
  };

  const handleOpenBookingWithAudit = (score: number, focusArea: string) => {
    setBookingService(`Audit Review: ${focusArea}`);
    setBookingAuditScore(score);
    setBookingOpen(true);
  };

  const handleOpenAuditScroll = () => {
    const el = document.getElementById('assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWorkScroll = () => {
    const el = document.getElementById('casestudies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceByName = (title: string) => {
    const item = servicesData.find((s) => s.title.toLowerCase() === title.toLowerCase());
    if (item) {
      setSelectedServiceDetail(item);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090e] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAudit={handleOpenAuditScroll}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreWork={handleExploreWorkScroll}
        />

        {/* Section 3: Trust Bar */}
        <TrustBar />

        {/* Section 4: About */}
        <About />

        {/* Section 5: Services */}
        <Services
          onSelectService={handleSelectServiceByName}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 6: Approach / Methodology */}
        <Approach />

        {/* Section 7: Case Studies */}
        <CaseStudies
          onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* Section 8: Why Nexora */}
        <WhyUs />

        {/* Section 9: Industries */}
        <Industries />

        {/* Section 10: Insights */}
        <Insights
          onOpenArticle={(article) => setSelectedArticle(article)}
        />

        {/* Interactive Feature: AI Strategy Calculator */}
        <StrategyCalculator
          onOpenBookingWithAudit={handleOpenBookingWithAudit}
        />

        {/* Section 11: Final CTA */}
        <CTASection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Section 12: Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Modals & Drawers */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={bookingService}
        auditScore={bookingAuditScore}
      />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenBooking={handleOpenBooking}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenBooking={handleOpenBooking}
      />

      <PrivacyTermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
