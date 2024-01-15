import React, { useState } from 'react'

import { HiArrowTopRightOnSquare } from "react-icons/hi2";

//imporation les images de projets Crocoheats 
import CrocoheatsProjectimage1 from '../assets/portfolio/CrocoheatsProject/Image_1.png';
import CrocoheatsProjectimage2 from '../assets/portfolio/CrocoheatsProject/Image_2.png';
import CrocoheatsProjectimage3 from '../assets/portfolio/CrocoheatsProject/Image_3.png';
import CrocoheatsProjectimage4 from '../assets/portfolio/CrocoheatsProject/Image_4.png';
import CrocoheatsProjectimage5 from '../assets/portfolio/CrocoheatsProject/Image_5.png';
import CrocoheatsProjectimage6 from '../assets/portfolio/CrocoheatsProject/Image_6.png';
import CrocoheatsProjectimage7 from '../assets/portfolio/CrocoheatsProject/Image_7.png';
import CrocoheatsProjectimage8 from '../assets/portfolio/CrocoheatsProject/Image_8.png';

//imporation les images de projets GpsTrackingSystem

import GpsTrackingSystemProjectimage1 from '../assets/portfolio/GpsTrackingSystemProject/Image_1.png';
import GpsTrackingSystemProjectimage2 from '../assets/portfolio/GpsTrackingSystemProject/Image_2.png';
import GpsTrackingSystemProjectimage3 from '../assets/portfolio/GpsTrackingSystemProject/Image_3.png';
import GpsTrackingSystemProjectimage4 from '../assets/portfolio/GpsTrackingSystemProject/Image_4.png';
import GpsTrackingSystemProjectimage5 from '../assets/portfolio/GpsTrackingSystemProject/Image_5.png';

//imporation les images de projets GpsTrackingSystem

import LandingPageProjetimage1 from '../assets/portfolio/AwsomeLandingPage/image1.png';



import Carousel from "../components/carousel";

import CrocoheatsProjectDemo from '../assets/portfolio/CrocoheatsProject/crocoheats-demo.webm';
import ModalVideo from 'react-modal-video/lib/index';
import 'react-modal-video/css/modal-video.min.css';

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };


  const CrocoheatsProject = [

    {
      id: 1,
      src: CrocoheatsProjectimage1,
    },
    {
      id: 2,
      src: CrocoheatsProjectimage2,
    },
    {
      id: 3,
      src: CrocoheatsProjectimage3,
    },
    {
      id: 4,
      src: CrocoheatsProjectimage4,
    },
    {
      id: 5,
      src: CrocoheatsProjectimage5,
    },
    {
      id: 6,
      src: CrocoheatsProjectimage6,
    },
    {
      id: 7,
      src: CrocoheatsProjectimage7,
    },
    {
      id: 8,
      src: CrocoheatsProjectimage8,
    },
  ]



  const GpsTrackingSystemProject = [

    {
      id: 1,
      src: GpsTrackingSystemProjectimage1,
    },
    {
      id: 2,
      src: GpsTrackingSystemProjectimage2,
    },
    {
      id: 3,
      src: GpsTrackingSystemProjectimage3,
    },
    {
      id: 4,
      src: GpsTrackingSystemProjectimage4,
    },
    {
      id: 5,
      src: GpsTrackingSystemProjectimage5,
    },

  ]


  const LandingPage = [

    {
      id: 1,
      src: LandingPageProjetimage1,
    }
  ];



  const portfolio = [
    {
      id: 1,
      images: CrocoheatsProject,
      hasCode: false,
      hasDemo: true,
    },
    {
      id: 2,
      images: GpsTrackingSystemProject,
      hasCode: false,
      hasDemo: false,
    },
    {
      id: 3,
      images: LandingPage,
      hasCode: "https://github.com/khaled-hammami/landing-page-with-react-and-tailwind",
      hasDemo: "https://practice7.netlify.app/",
    },
  ];


  const renderDemoButton = (demo, openModal) => {
    if (demo === true) {
      // Afficher le bouton "Demo" qui ouvre la vidéo
      return (
        <button onClick={openModal} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
           <span className="mr-2">Demo</span>
          < HiArrowTopRightOnSquare />
          
        </button>
      );
    } else if (typeof demo === 'string' && demo !== '') {
      // Afficher le bouton "Demo" qui redirige vers le lien en direct
      return (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
          <span className="mr-2">Demo</span>
          < HiArrowTopRightOnSquare />
        </a>
      );
    } else {
      // Ne rien afficher s'il n'y a pas de démo disponible
      return (
        <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-500">
          Demo
        </p>
      );
    }
  };

  return (
    <div name="portfolio" className="pt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, images, hasDemo, hasCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Carousel slides={images.map(img => img.src)} className="rounded-xl" />
              <div className="flex items-center justify-center">

                {renderDemoButton(hasDemo, openModal)}


                {hasCode ? (
                  <a href={hasCode} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
                    <span className="mr-2">Code</span>
                    < HiArrowTopRightOnSquare />
                  </a>
                ) : (
                  <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-500">
                    Code
                  </p>
                )}


              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalVideo channel='custom' isOpen={isOpen} url={CrocoheatsProjectDemo} onClose={closeModal} />
    </div>
  );
}

export default Portfolio;
