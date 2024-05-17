import Brands from '@/components/Frontend/Brands';
import Hero from '@/components/Frontend/Hero';
import TabbedSections from '@/components/Frontend/TabbedSection';
// import MegaMenu from '@/components/Frontend/MegaMenu';
import React from 'react';

const Page = () => {
  return (
    <section className=''>
     
      <Hero />
      <Brands />
      <TabbedSections />
    </section>
  );
};

export default Page;