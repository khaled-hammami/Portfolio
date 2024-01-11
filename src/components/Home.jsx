import React from 'react';
import hero1 from '../assets/img.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempora nostrum, tenetur placeat maiores, est eum blanditiis aperiam rerum repudiandae, inventore neque ducimus aut quae. Quae incidunt doloremque reprehenderit asperiores!
                    </p>

                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className="group hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="" >
                    <img
                        src={hero1}
                        alt="my portfolio"
                        className="rounded-2xl mx-auto w-2/3  md:w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
