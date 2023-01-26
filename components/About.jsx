import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import imgabout from '../assets/images/shoe4.jpg';
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();
  return (
    <main id="about" className="max-w-5xl mx-auto px-10 my-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400  to-rose-700   ">
          about
        </h1>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:flex justify-between  w-full"
      >
        <div className="md:w-[45%] transform hover:rotate-6 duration-300 transition-all">
          <Image
            src={imgabout}
            alt="aboutimg"
            className="w-full h-full object-cover object-left rounded-xl "
          />
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-[45%] flex flex-col  space-y-4 mt-4 md:mt-0"
        >
          <h2 className="text-xl md:text-2xl uppercase font-semibold ">
            nous sommes tous tes chaussures
          </h2>
          <div>
            <h4 className="text-xl  mb-2 font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500  to-rose-700  ">
              apropos de nous
            </h4>
            <p className="text-base tracking-widest">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis deleniti blanditiis consectetur, reprehenderit obcaecati
              fugiat.
            </p>
          </div>
          <div>
            <button
              onClick={() => router.push('/about')}
              className="w-auto uppercase px-4 py-2 rounded-xl bg-yellow-400 hover:text-white font-semibold duration-300 transition hover:bg-yellow-800 text-black"
            >
              savior plus{' '}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default About;
