import React from 'react';
import heroimg from '../assets/images/shoe7.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className="max-w-5xl mx-auto grid grid-cols-1  md:grid-cols-2 px-10   h-auto py-10 md:py-24 items-center gap-20 ">
      <div className="flex flex-col space-y-5 max-w-md mx-auto">
        <h1 className="text-2xl uppercase font-bold tracking-wide lg:text-4xl">
          bienvenu sur le plateform <br />
          <span className="text-yellow-400 font-mono">shoes shop</span> de Mbeni{' '}
        </h1>
        <p className="text-base font-normal tracking-wider max-w-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          repellendus blanditiis praesentium aut, deserunt numquam. repellendus
          blanditiis praesentium aut, deserunt numquam.
        </p>
        <div className="flex items-center gap-4 ">
          <Link href="/about">
            <a className="uppercase px-4 py-2 rounded-xl bg-yellow-400 hover:text-white font-semibold duration-300 transition hover:bg-yellow-800 text-black">
              savoir plue
            </a>
          </Link>
          <Link href="/products">
            <a className="uppercase px-4 py-2 rounded-xl bg-gray-400 hover:text-white font-semibold duration-300 transition hover:bg-yellow-800 text-black">
              nos produits
            </a>
          </Link>
        </div>
      </div>
      <div className="max-w-md mx-auto  ">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={heroimg}
            className="object-cover object-center hover:scale-105 duration-200 transition rounded-xl shadow-sm shadow-yellow-400/50 w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
