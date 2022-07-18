import React from 'react';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Products from '../components/Products';
import Services from '../components/Services';
import History from '../components/History';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Collections />
      <Products />
      <Services />
      <History />
      <Banner />
      <Footer />
    </div>
  );
}

export default HomePage;
