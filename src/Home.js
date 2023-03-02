import React from 'react'
import Header from './components/Header';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home