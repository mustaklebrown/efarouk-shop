import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-black/50 h-auto p-3 mt-8  bottom-0 left-0">
      <div className="max-w-6xl m-auto flex justify-between items-center h-full">
        <div className="flex-col flex">
          <Link href="/">
            <a className="text-base lg:text-md font-semibold uppercase ease-in  py-2 transition-all duration-200 cursor-pointer hover:text-yellow-600 text-blue-500 ">
              home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base lg:text-md font-semibold uppercase ease-in  py-2 transition-all duration-200 cursor-pointer hover:text-yellow-600 text-blue-500 ">
              about
            </a>
          </Link>
          <Link href="/products">
            <a className="text-base lg:text-md font-semibold uppercase ease-in  py-2 transition-all duration-200 cursor-pointer hover:text-yellow-600 text-blue-500 ">
              products
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-base lg:text-md font-semibold uppercase ease-in  py-2 transition-all duration-200 cursor-pointer hover:text-yellow-600 text-blue-500 ">
              contact
            </a>
          </Link>
        </div>
        <div>
          <p className="text-md tracking-widest capitalize">
            @all layers reserve to farouk shops 2023
          </p>
        </div>
        <div className="space-y-2">
          <a
            href="#"
            className="flex gap-2 items-center text-lg underline hover:text-yellow-500 duration-150 text-blue-500 font-bold "
          >
            {' '}
            <FaFacebook className="text-white text-2xl" /> <span>facebook</span>
          </a>
          <a
            href="#"
            className="flex gap-2 items-center text-lg underline hover:text-yellow-500 duration-150e font-bold text-blue-500  "
          >
            {' '}
            <FaYoutube className="text-white text-2xl" /> <span>youtube</span>
          </a>
          <a
            href="#"
            className="flex gap-2 items-center text-lg underline hover:text-yellow-500 duration-150 font-bold text-blue-500 "
          >
            {' '}
            <FaWhatsapp className="text-white text-2xl" /> <span>whatsapp</span>
          </a>
          <a
            href="#"
            className="flex gap-2 items-center text-lg underline hover:text-yellow-500 duration-150 font-bold text-blue-500 "
          >
            {' '}
            <FaInstagram className="text-white text-2xl" />{' '}
            <span>instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
