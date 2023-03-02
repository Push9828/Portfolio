import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg lg:text-2xl text-accent mb-[22px]">
              Hey, I'm Pushkar 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px] md:pb-12 pb-8">
              I build user friendly <br /> Web Interfaces.
            </h1>
            <a href="../../assets/PushkarResume.pdf" download>
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                Resume
              </button>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <Spline scene="https://prod.spline.design/xj5lAdubEGcSjaMO/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
