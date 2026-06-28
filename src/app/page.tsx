import styled from 'styled-components';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompaniesSection from '@/components/CompaniesSection';
import CollectSection from '@/components/CollectSection';
import MoreSection from '@/components/MoreSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CompaniesSection />
      <CollectSection />
      <MoreSection />
    </main>
  );
}
