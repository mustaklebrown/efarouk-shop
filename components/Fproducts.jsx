import Image from 'next/image';
import React from 'react';
import data from '../data/data';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
const imag =
  'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80';

const Fproducts = () => {
  const products = data.frontproduct;
  return (
    <div id="fproducts" className="max-w-5xl mx-auto px-10 my-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-rose-300   ">
          most reted products
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center ">
        {products.map((product, i) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1], y: [-50, 0] }}
              transition={{ duration: 1, delay: 0.8 * i, type: 'spring' }}
              key={product.id}
              className="justify-self-center max-w-sm   h-56 relative rounded-xl shadow-md shadow-yellow-400 overflow-hidden hover:-translate-y-1 duration-200 transition-all"
            >
              <div className="bg-black/70 w-full h-full absolute  z-50 flex flex-col justify-center items-center ">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-indigo-500 to-rose-600 uppercase">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-indigo-400">
                  $ {product.price}
                </p>
                <div className="flex justify-between items-center">
                  {product.rate.map((star, i) => {
                    return <FiStar key={i} className="text-yellow-400 " />;
                  })}
                </div>
              </div>
              <Image
                src={product.images}
                alt={product.name}
                width={320}
                height={320}
                className="object-cover object-center h-full w-full "
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Fproducts;
