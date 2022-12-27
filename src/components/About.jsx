import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white md:py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:my-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
        Assalamualaikum, My name is Apurbo. I am a frontend developer.
        </p>

        <br />

        <p className="text-xl">
        I love to work on web application using technologies like
            React, Tailwind, Next JS.
        </p>
      </div>
    </div>
  );
};

export default About;
