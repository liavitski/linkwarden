import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompaniesSection from '@/components/CompaniesSection';
import CollectSection from '@/components/CollectSection';
import MoreSection from '@/components/MoreSection';
import UseCasesSection from '@/components/UseCasesSection';
import PlanSection from '@/components/PlanSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CompaniesSection />
      <CollectSection />
      <MoreSection />
      <UseCasesSection />
      <PlanSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
