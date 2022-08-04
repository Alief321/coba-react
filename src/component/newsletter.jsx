import React from 'react';

const Newsletter = () => {
  return (
    <div id="newsletter" className="w-full py-16 text-white ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Lorem ipsum dolor sit amet consectetur</h1>
          <p className="text-md mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, hic.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter email" />
            <button className="md:ml-4 mt-6 md:mt-0  w-[200px] h-12 font-bold text-black bg-green-500 mx-auto text-md md:text-xl rounded-3xl shadow-sm shadow-slate-700 hover:brightness-90 ">Kirim</button>
          </div>
          <p className="md:mt-4  mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit at. <span className="text-green-400">Ut, consequatur.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
