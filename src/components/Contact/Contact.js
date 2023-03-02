import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            Please feel free to contact me using the form below if you have any
            questions or would like to request an offer
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row justify-center items-center">
          <form
            action="https://getform.io/f/31692e64-e618-4262-9567-49e5e083fa34"
            method="POST"
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Your name"
              />
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Your email"
              />
            </div>
            <input
              name="subject"
              type="text"
              className="input"
              placeholder="Subject"
            />
            <textarea
              name="message"
              className="textarea"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
