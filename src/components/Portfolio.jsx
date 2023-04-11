import React from "react";
import Gunma from "../assets/portfolio/GunmaSS.png"
import Ecommerce from "../assets/portfolio/ecommerce.png";
import Facebook from "../assets/portfolio/Facebook.png";
import FoodMenu from "../assets/portfolio/FoodMenu.png";
import Movies from "../assets/portfolio/Movies.png";
import Textutils from "../assets/portfolio/Textutils.png";
import Tictactoe from "../assets/portfolio/Tictactoe.png";
import Todo from "../assets/portfolio/Todo.png";
import Weather from "../assets/portfolio/Weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Gunma,
      title: "Gunma Halal Food ( Ecommerce Website for Japan based client )",
      url: "http://gumna-halal-food.myesdev.xyz/",
      code: "https://github.com/arapurbo18181/Gunma-Halal-Food"
    },
    {
      id: 2,
      src: Ecommerce,
      title: "Ecommerce Website",
      url: "https://my-ecommerce-website.vercel.app/",
      code: "https://github.com/arapurbo18181/My-Ecommerce-Website"
    },
    {
      id: 3,
      src: Facebook,
      title: "Facebook-clone",
      url: "https://facebook-clone-apps.vercel.app/",
      code: "https://github.com/arapurbo18181/facebook-clone"
    },
    {
      id: 4,
      src: FoodMenu,
      title: "FoodMenu",
      url: "https://restaurant-menu-cyan.vercel.app/",
      code: "https://github.com/arapurbo18181/restaurant-menu"
    },
    {
      id: 5,
      src: Movies,
      title: "Movies",
      url: "https://movies-catalogue.vercel.app/",
      code: "https://github.com/arapurbo18181/Movies-Catalogue"
    },
    {
      id: 6,
      src: Todo,
      title: "Todo",
      url: "https://this-is-a-to-do-app.vercel.app/",
      code: "https://github.com/arapurbo18181/Todo-List"
    },
    {
      id: 7,
      src: Tictactoe,
      title: "Tictactoe",
      url: "https://tic-tac-toe-one-self.vercel.app/",
      code: "https://github.com/arapurbo18181/tic-tac-toe"
    },
    {
      id: 8,
      src: Weather,
      title: "Weather",
      url: "https://weather-application-ruddy.vercel.app/",
      code: "https://github.com/arapurbo18181/weather-application"
    },
    {
      id: 9,
      src: Textutils,
      title: "Textutils",
      url: "https://react-app-seven-liart.vercel.app/",
      code: "https://github.com/arapurbo18181/React-App"
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-full pb-10 pt-20 md:pb-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, url }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg h-[250px]"
            >
              <div className="overflow-hidden h-[70%] relative">
                <img
                  src={src}
                  alt=""
                  className="rounded-md hover:scale-105 transition-all duration-500 object-cover"
                />
              </div>
              <div className="flex items-center justify-center h-[30%]">
                <a href={url} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target={"_blank"}>
                  Live
                </a>
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target={"_blank"}>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
