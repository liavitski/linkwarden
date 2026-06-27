import styled from 'styled-components';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompaniesSection from '@/components/CompaniesSection';
import CollectSection from '@/components/CollectSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CompaniesSection />
      <CollectSection />
    </main>
  );
}
