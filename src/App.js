import React from 'react';
import Header from './components/Header';
import Navbar from 'components/Navbar';
import HeroSection from 'components/EntranceSection';
import About from 'components/About';
import LatestList from 'components/LatestList';
import Trends from 'components/Trends';
import Rating from 'components/Rating';
import Footer from 'components/Footer';
import FooterEnd from 'components/FooterEnd';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroSection />
      <About />
      <LatestList />
      <Trends />
      <Rating />
      <Footer/>
      <FooterEnd/>
    </div>
  );
}

export default App;
