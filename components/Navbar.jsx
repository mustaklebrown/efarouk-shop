import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiAlignRight } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import {
  selectTotalQTY,
  selectCartItems,
  setGetTotals,
} from '../features/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQTY = useSelector(selectTotalQTY);

  const opennav = () => {
    setOpen(!open);
  };
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  return (
    <header
      id="nav"
      className="sticky top-0 left-0 bg-black/90 z-[1000] rounded-b-2xl max-w-6xl mx-auto mb-10"
    >
      <div className="flex justify-between px-10 py-4 ">
        <div>
          <h1 className="text-2xl lg:text-3xl uppercase font-bold font-mono ">
            shoes<span className="text-yellow-400">Shop</span>
          </h1>
        </div>
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 ">
          <Link href="/">
            <a className="text-md  lg:text-lg font-semibold uppercase ease-in hover:text-yellow-400 transition-all duration-200 cursor-pointer hover:underline ">
              home
            </a>
          </Link>
          <Link href="#about" passHref>
            <a className="text-md lg:text-lg font-semibold uppercase ease-in hover:text-yellow-400 transition-all duration-200 cursor-pointer hover:underline ">
              About
            </a>
          </Link>
          <Link href="#gallery" passHref>
            <a className="text-md lg:text-lg font-semibold uppercase ease-in hover:text-yellow-400 transition-all duration-200 cursor-pointer hover:underline ">
              gallery
            </a>
          </Link>
          <Link href="#services" passHref>
            <a className="text-md lg:text-lg font-semibold uppercase ease-in hover:text-yellow-400 transition-all duration-200 cursor-pointer hover:underline ">
              services
            </a>
          </Link>
          <Link href="/products" passHref>
            <a className="text-md lg:text-lg font-semibold uppercase ease-in  transition-all duration-200 cursor-pointer hover:bg-yellow-600 hover:text-gray-800  bg-blue-800 px-2 py-1 rounded-md">
              products
            </a>
          </Link>
          {/* <Link href="/cart" passHref>
            <a className="text-md lg:text-lg font-semibold uppercase ease-in  transition-all duration-200 cursor-pointer hover:bg-yellow-600 hover:text-gray-800  bg-blue-800 px-2 py-1 rounded-md">
              <FaShoppingCart size={30} />
            </a>
          </Link> */}
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <div>
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                  {totalQTY}
                </span>
              </div>
            </Link>
          </div>
        </ul>
        <button
          onClick={() => opennav()}
          type="button"
          className="text-3xl hover:text-yellow-400 duration-300 hover:-translate-y-1 cursor-pointer hover:underline md:hidden"
        >
          <FiAlignRight width={10} height={20} />
        </button>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.5, delay: 0 }}
        className={!open && 'hidden'}
      >
        <ul className="md:hidden border-b flex-col flex space-y-4 w-full text-center py-8 duration-300 ease-in-out transition-all ">
          <Link href="/">
            <a
              onClick={() => opennav()}
              className="text-md  lg:text-lg font-semibold uppercase ease-in hover:bg-yellow-400 py-4 transition-all duration-200 cursor-pointer hover:text-gray-900 "
            >
              home
            </a>
          </Link>
          <Link href="#about">
            <a
              onClick={() => opennav()}
              className="text-md lg:text-lg font-semibold uppercase ease-in hover:bg-yellow-400 py-4 transition-all duration-200 cursor-pointer hover:text-gray-900 "
            >
              About
            </a>
          </Link>
          <Link href="/products">
            <a
              onClick={() => opennav()}
              className="text-md lg:text-lg font-semibold uppercase ease-in hover:bg-blue-600 py-4 transition-all duration-200 cursor-pointer hover:text-gray-200 "
            >
              products
            </a>
          </Link>
          <Link href="#gallery">
            <a
              onClick={() => opennav()}
              className="text-md lg:text-lg font-semibold uppercase ease-in hover:bg-yellow-400 py-4 transition-all duration-200 cursor-pointer hover:text-gray-900 "
            >
              gallery
            </a>
          </Link>
          <Link href="#services">
            <a
              onClick={() => opennav()}
              className="text-md lg:text-lg font-semibold uppercase ease-in hover:bg-yellow-400 py-4 transition-all duration-200 cursor-pointer hover:text-gray-900 "
            >
              services
            </a>
          </Link>
          <Link href="/cart">
            <a
              onClick={() => opennav()}
              className="text-md lg:text-lg font-semibold uppercase ease-in hover:bg-blue-600 py-4 transition-all duration-200 cursor-pointer flex justify-center items-center hover:text-gray-200 text-center "
            >
              <span>
                <FaShoppingCart size={30} />
              </span>
            </a>
          </Link>
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
