import React from 'react';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const Card = () => {
  return (
    <div id="resource" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 transition">
          <img className="w-72 mx-auto bg-white mt-[-3rem]" src={img2} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Gambar 1</h2>
          <p className="text-center text-4xl font-bold">Rp. 500</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor, </p>
            <p className="py-2 border-b mx-8 ">Lorem ipsum dolor, </p>
            <p className="py-2 border-b mx-8 ">Lorem ipsum dolor, </p>
          </div>
          <button className="mt-6  w-[200px] h-12 font-bold text-black bg-green-500 mx-auto text-md md:text-xl rounded-md shadow-sm shadow-slate-700 hover:bg-white hover:text-green-600 ">Monggoh Dicoba</button>
        </div>
        <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 transition">
          <img className="w-72 mx-auto bg-transparent mt-[-3rem] " src={img3} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Gambar 2</h2>
          <p className="text-center text-4xl font-bold">Rp. 1.500</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor, </p>
            <p className="py-2 border-b mx-8 ">Lorem ipsum dolor, </p>
            <p className="py-2 border-b mx-8 ">Lorem ipsum dolor, </p>
          </div>
          <button className="mt-6  w-[200px] h-12 font-bold text-white bg-black mx-auto text-md md:text-xl rounded-md shadow-sm shadow-slate-700 hover:bg-white hover:text-green-600 ">Monggoh Dicoba</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 transition">
          <img className="w-72 mx-auto bg-white mt-[-3rem]" src={img4} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Gambar 1</h2>
          <p className="text-center text-4xl font-bold">Rp. 2.s500</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor, </p>
            <p className="py-2 border-b mx-8 ">Lorem ipsum dolor, </p>
            <p className="py-2 border-b mx-8 ">Lorem ipsum dolor, </p>
          </div>
          <button className="mt-6  w-[200px] h-12 font-bold text-black bg-green-500 mx-auto text-md md:text-xl rounded-md shadow-sm shadow-slate-700 hover:bg-white hover:text-green-600 ">Monggoh Dicoba</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
