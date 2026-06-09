import CtaSection from '../sections/home/Ctasection';
import Faq from '../sections/home/Faq';
import { Hero } from '../sections/home/Hero';
import HomeCaseStudy from '../sections/home/HomeCaseStudy';
import Process from '../sections/home/Process';
import Testimonials from '../sections/home/Testimonials';
import WhatWeBuild from '../sections/home/WhatWeBuild';
import WhySaikatCapital from '../sections/home/WhySaikatCapital';
import { BrandGrowth } from './BrandGrowth';

export const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeBuild />
      <HomeCaseStudy />
      <BrandGrowth />
      <WhySaikatCapital />
      <Process />
      <Testimonials />
      {/* <Faq /> */}
      <CtaSection />
    </div>
  );
};
