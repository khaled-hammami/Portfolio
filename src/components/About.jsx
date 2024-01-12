import React from 'react';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
    return (

        <div name="about" className="w-full pt-32 bg-gradient-to-b from-gray-800 to-black text-white " >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl ">
                    Hello, I'm **Khaled Hammami**, a computer engineer specialized in web and multimedia technology, and a graduate of the Higher Institute of Computer Science and Multimedia of Sfax (ISIMS) in Tunisia.
                </p>
                <br />
                <p className="text-xl">

                    As a Full Stack Developer, I'm actively seeking new challenges to apply my skills and contribute to the success of computer projects. I have a strong foundation in the world of development and am ready to take on diverse and exciting projects.
                </p>
                <br />
                <p className="text-xl">

                    I believe in the power of collaboration and the endless possibilities that arise when creative minds come together. If you're looking for a dedicated and versatile developer, I'd love to connect with you. Let's explore the limitless potential of technology and turn ideas into reality.
                </p>
                <br />
                <Link to="contact" smooth duration={500} className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer max-w-md '>
                    Contact Me
                    <span className="group hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </Link>



            </div>
        </div>
    )
}

export default About