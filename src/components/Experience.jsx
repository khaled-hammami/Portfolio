import React from 'react'
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import node from '../assets/node.png';
import aspNet from '../assets/aspNet.png';
import sqlServer from '../assets/sqlserver.png';
import mongodb from '../assets/mongodb.png';
import github from '../assets/github.png';


const Experience = () => {


    const tech = [
        {
            id: 1,
            src: html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title:'JAVA SCRIPTS',
            style:'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title:'REACT',
            style:'shadow-blue-500'
        },
        {
            id: 5,
            src: angular,
            title:'ANGULAR',
            style:'shadow-red-500'
        },
        {
            id: 6,
            src: bootstrap,
            title:'BOOTSTRAP',
            style:'shadow-purple-500'
        },
        {
            id: 7,
            src: tailwind,
            title:'TAILWIND CSS',
            style:'shadow-blue-500'
        },
        {
            id: 8,
            src: node,
            title:'NODE JS',
            style:'shadow-green-500'
        },
        {
            id: 9,
            src: aspNet,
            title:'asp.Net',
            style:'shadow-blue-500'
        },
        {
            id: 10,
            src: sqlServer,
            title:'SQL SERVER',
            style:'shadow-blue-500'
        },
        {
            id: 11,
            src: mongodb,
            title:'MONGODB',
            style:'shadow-green-500'
        },
        {
            id: 12,
            src: github,
            title:'GITHUB',
            style:'shadow-blue-500'
        },
       
       


    ]
    return (
       
        <div name="experience" className="pt-32 bg-gradient-to-b from-gray-800 to-black w-full  ">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" >
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-3 sm:grid-cols-4  text-center py-8 px-12 sm:px-0">

                    {tech.map(({ id, src, title, style }) =>
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` } >
                            <img src={src} alt="" className="w-20 h-20 mx-auto"></img>
                            <p className="mt-4">{title}</p>
                        </div>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Experience