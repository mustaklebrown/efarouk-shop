import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import data from '../../data/data.json';
import { setAddItemToCart } from '../../features/CartSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const id = route.query.id ? +route.query.id : undefined;
  const product = data.find((product) => product.id === id);
  return (
    <div className="max-w-6xl p-4 mx-auto h-auto pt-20 flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col md:flex-row gap-8  lg:gap-20 justify-center items-start w-full ">
        <div className="space-y-4">
          <div className="rounded-lg  shadow-md shadow-gray-600 overflow-hidden h-full">
            <Image
              src={product?.imgs}
              alt="singledetails"
              width={580}
              height={420}
              className="object-cover h-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold italic uppercase bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-yellow-500  to-yellow-600">
              existing colors
            </h2>
            <div className="flex items-start space-x-2 flex-wrap gap-2 text-gray-100">
              <div className="hover:scale-105 duration-200 cursor-pointer border shadow-md shadow-gray-600 bg-red-600 rounded-md flex items-center justify-center p-4 ">
                red
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer border shadow-md shadow-gray-600 bg-blue-600 rounded-md flex items-center justify-center p-4 ">
                blue
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer border shadow-md shadow-gray-600 bg-yellow-600 rounded-md flex items-center justify-center p-4 ">
                yellow
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer border shadow-md shadow-gray-600 bg-black rounded-md flex items-center justify-center p-4 ">
                black
              </div>
            </div>
          </div>
          <button
            onClick={() => dispatch(setAddItemToCart(product))}
            className="btn"
          >
            add to cart{' '}
          </button>
        </div>
        <div className="max-w-md">
          <h1 className="text-2xl mb-5 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-yellow-500  to-yellow-600 uppercase italic">
            sandellette
          </h1>
          <p className="text-gray-200 text-lg font-semilight mb-5">
            {product?.desc}
          </p>
          <p className="text-gray-200 text-lg font-semilight mb-1">
            {product?.desc}
          </p>
          <div className="space-y-6 mt-2">
            <div className=" flex justify-between px-10 w-full shadow-md shadow-indigo-400 py-4 rounded-xl bg-gray-100">
              <p className="text-md font-bold text-gray-800 uppercase italic">
                genre
              </p>
              <p className="text-2xl  uppercase text-gray-800 font-medium">
                {product?.genre}
              </p>
            </div>
            <div className="flex justify-between px-10 w-full shadow-md shadow-indigo-400 py-4 rounded-xl bg-gray-100">
              <p className="text-md  text-gray-800 font-bold uppercase italic">
                price
              </p>
              <p className="text-2xl uppercase text-gray-800 font-medium">
                $ {product?.price}
              </p>
            </div>
            <div className="flex justify-between px-6 w-full shadow-md shadow-indigo-400 py-4 rounded-xl bg-gray-100">
              <p className="text-md font-bold uppercase italic text-gray-800">
                rated
              </p>
              <p className="flex gap-1 md:gap-4 text-yellow-600">
                {product?.stars?.map((star, i) => {
                  return (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a
          onClick={() => route.back()}
          className="px-4 cursor-pointer py-2 rounded-lg text-gray-100 uppercase bg-yellow-800 hover:bg-yellow-500 duration-300 shadow-md shadow-gray-500"
        >
          go back
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
