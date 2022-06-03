import Banner from './components/Banner';
import Collections from './components/Collections';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import History from './components/History';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';

function App() {
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

export default App;
