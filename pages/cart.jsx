import Image from 'next/image';
import react, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setGetTotals,
} from '../features/CartSlice';
import axios from 'axios';

const Shopping = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };
  const createCheckoutSession = async () => {
    axios
      .post('api/checkout_sessions', { cartItems })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .then((res) => onClearCartItems())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 xl:px-0 bg-gray-700 min-h-[calc(100vh-220px)] w-full">
        <div className="flex flex-col  gap-4 w-full">
          <div className="flex justify-between py-4 w-full">
            <p className="text-xl font-bold">cart items {totalQTY}</p>
            <button
              className="text-md lg:text-lg font-semibold uppercase ease-in  transition-all duration-200 cursor-pointer hover:bg-red-600 hover:text-gray-800  bg-red-800 px-2 py-1 rounded-md"
              onClick={onClearCartItems}
            >
              clear cart
            </button>
          </div>
          {cartItems?.map((c) => {
            return <Cart key={c.id} item={c} />;
          })}

          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between w-full px-4 bg-gray-600">
                <p className="text-xl font-bold uppercase">total amouts</p>
                <p className="text-xl font-bold uppercase">$ {totalAmount}</p>
              </div>
              <button
                className="text-md lg:text-lg font-semibold uppercase ease-in  transition-all duration-200 cursor-pointer hover:bg-yellow-500 hover:text-gray-800  bg-yellow-800 px-2 py-1 rounded-md"
                onClick={createCheckoutSession}
              >
                checkout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Shopping;
