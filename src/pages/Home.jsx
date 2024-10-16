import React from 'react'
import HeaderSection from '../components/HeaderSection'
import PromoSection from '../components/PromoSection'
import Footer from '../components/Footer'
import FooterNav from "../components/FooterNav";
import Carousel from '../components/Carousel';
const Home = () => {
  return (
    <div>
      <Carousel/>
      <HeaderSection />
      <PromoSection />
      <FooterNav />
      <Footer />
    </div>
  );
}

export default Home