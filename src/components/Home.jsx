import React from 'react';
import hero1 from '../assets/img3.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="pt-32 bg-gradient-to-b from-black to-gray-800"> 
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Discover the world of coding through the lens of a passionate Full Stack Developer.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer max-w-md '>
            Explore My Portfolio
              <span className="group hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:mt-0">
          <img
            src={hero1}
            alt="my portfolio"
            className="rounded-2xl mx-auto w-full md:w-2/3 max-h-96 md:max-h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
