import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center h-full">
          <h2 className="text-3xl mt-24 md:mt-0 sm:text-6xl font-bold text-white mb-5">
            Assalamualaikum
          </h2>
          <h2 className="text-3xl sm:text-6xl font-bold text-white mb-5">
            This is Apurbo
          </h2>
          <h2 className="text-2xl sm:text-5xl font-bold text-white mb-10">
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  changeDelay: 10,
                  changeDeleteSpeed: 1,
                  autoStart: true,
                  loop: true,
                }}
              />
          </h2>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Read More
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex-1 md:ml-20 mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
