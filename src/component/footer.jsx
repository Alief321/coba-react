import React from 'react';
import { FaDribbbleSquare, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="Contact" className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-slate-200">
      <div>
        <h1 className="w-full text-3xl font-bold text-green-400 mb-4">Coba React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam animi architecto temporibus, quae est? Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
        <div className="flex md:w-[75%] justify-between my-6 ">
          <a href="https://www.facebook.com/aliefta.zulvansyah/" target={'_blank'} className="hover:scale-110 transition">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/zv.alief/" target={'_blank'} className="hover:scale-110 transition">
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/Alief321" target={'_blank'} className="hover:scale-110 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/Mahklukbumi6" target={'_blank'} className="hover:scale-110 transition">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solution</h6>
          <ul>
            <li className="py-2 text-sm">Analytic</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Price</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Career</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
