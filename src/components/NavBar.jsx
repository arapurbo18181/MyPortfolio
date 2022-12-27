import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-10 text-white z-10 bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Apurbo</h1>
      </div>

      <ul className="hidden md:flex">
          <li
            className="px-4 cursor-pointer capitalize text-[20px] font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={"#"} smooth duration={500}>
              Home
            </Link>
          </li>
          <li
            className="px-4 cursor-pointer capitalize text-[20px] font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={"#about"} smooth duration={500}>
              About
            </Link>
          </li>
          <li
            className="px-4 cursor-pointer capitalize text-[20px] font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={"#projects"} smooth duration={500}>
              Projects
            </Link>
          </li>
          <li
            className="px-4 cursor-pointer capitalize text-[20px] font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={"#skills"} smooth duration={500}>
              Skills
            </Link>
          </li>
          <li
            className="px-4 cursor-pointer capitalize text-[20px] font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={"#contact"} smooth duration={500}>
              Contact
            </Link>
          </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
