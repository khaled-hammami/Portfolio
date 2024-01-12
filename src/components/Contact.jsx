import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="pt-20 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <form
            action="https://getform.io/f/fae4d272-5160-4b67-9c60-15fa020f2367"
            method="POST"
            className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mb-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>

          {/* Contact Details */}
          <div className="w-full md:w-1/3 md:ml-40 text-center md:text-left" >
            <p className="text-lg font-bold mb-2">Contact Details:</p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> Khaledhammami492@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-bold">Tel:</span> +216 51 50 44 00
            </p>
            <p>
              <span className="font-bold">Adresse:</span> Manouba, Tunis, Tunisia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
