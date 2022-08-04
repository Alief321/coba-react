import React from 'react';
import pic from '../assets/1.jpg';

const Analyst = () => {
  return (
    <div id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={pic} alt="/" className="w-[500px] mx-auto my-4 rounded-lg" />
        <div className="md:pl-4 flex flex-col justify-center">
          <p className="uppercase text-green-400 font-bold">Lorem, ipsum dolor.</p>
          <h1 className="md:text-4xl font-bold sm:text-3xl text-2xl py-2">Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, saepe, adipisci consequuntur minima quod nihil dolorem id, veritatis deserunt tempore debitis labore culpa commodi earum.</p>
          <button className="w-[40%] h-12 font-bold text-green-500 bg-black  mt-8 text-xl  rounded-xl  hover:bg-slate-200 border border-slate-700 shadow-sm shadow-slate-700 md:mx-0 mx-auto">Yok labuh</button>
        </div>
      </div>
    </div>
  );
};

export default Analyst;
