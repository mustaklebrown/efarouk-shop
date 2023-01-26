import Image from 'next/image';
import React from 'react';
// import data from '../data/data';
import data from '../data/data.json';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-5xl mx-auto px-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400  to-rose-700   ">
          shoes gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data?.map((g, i) => {
          return (
            <Link key={i} href={`/products/${g.id}`} passHref>
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  translateX: [-50, 0],
                  translateY: [-50, 0],
                }}
                // initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                key={i}
                className="cursor-pointer max-w-sm relative group overflow-hidden max-h-[350px] rounded-lg shadow-sm shadow-green-400 p-0 m-0"
              >
                <div className="bg-black/60 absolue w-full h-full z-50 absolute opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center ">
                  <h1 className="text-gray-100 uppercase font-bold font-mono">
                    {g.name}
                  </h1>
                  <p className="text-green-300 font-bold text-xl">
                    {g.price} $
                  </p>
                </div>
                <Image
                  src={g.imgs}
                  alt={g.name}
                  width={650}
                  height={380}
                  className="absolute top-0 left-0 object-cover w-full h-full object-center p-0 m-0"
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
