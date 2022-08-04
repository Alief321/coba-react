import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green-400 uppercase font-bold p-2 md:text-2xl text-md">Lorem ipsum dolor sit.</p>
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">Lorem, ipsum dolor.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Kerjaane mukur </p>
          <Typed className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4" strings={['madang', 'ngising', 'turu']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro ullam doloremque atque eius consequatur?</p>
        <button className="w-1/2 h-12 font-bold text-white bg-green-500 mx-auto mt-8 text-3xl md:text-4xl rounded-xl shadow-sm shadow-slate-700 hover:brightness-90 hover:scale-105 transition">Yok Dilabuhi</button>
      </div>
    </div>
  );
};

export default Hero;
