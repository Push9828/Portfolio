import React from 'react'
import Header from './components/Header';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default Home