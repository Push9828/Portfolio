import React from 'react'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BacktoTop";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home