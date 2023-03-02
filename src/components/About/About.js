import React from "react";
import Avatar from "../../assets/img/3d-avatar.png";
import { motion } from "framer-motion";

const About = () => {
  const startDate = new Date("2021-09-03");

  const timeDiff = Date.now() - startDate.getTime();
  const yearDiff = (timeDiff / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

  return (
    <section id="about" className="section bg-secondary lg:pb-14">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl "
            src={Avatar}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col"
            >
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Pushkar Thakur
              </h2>
              <p className="mb-4 text-accent">Software Engineer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hey there! I'm a fresh 2021 graduate who started off my
                professional career with Accenture where I explored my love for
                testing and automation. But as fate would have it, I found my
                way back to my true passion - building web applications, and
                dove into frontend development at Konfhub. With my trusty
                ReactJS and NextJS skills, I've been creating some pretty cool
                stuff for the past {yearDiff} years.
                <br />
                <br /> But I'm not just all code and no play! I'm also an active
                member of various technical communities where I love to share
                and learn with like-minded people. And let's face it, who
                doesn't love to expand their horizons? That's why I'm itching to
                dive into the backend world and see what new adventures await
                me. <br />
                <br />
                So if you're looking for a playful, curious, and passionate
                frontend developer with a thirst for exploration, look no
                further! Let's create something amazing together.
              </p>
            </motion.div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
