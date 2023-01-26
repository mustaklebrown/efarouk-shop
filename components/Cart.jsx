import react, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from '../features/CartSlice';

const Cart = ({ item: { id, name, desc, imgs, price, cartQuantity } }) => {
  const dispatch = useDispatch();
  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        name,
        desc,
        imgs,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        name,
        desc,
        imgs,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        name,
        desc,
        imgs,
        price,
        cartQuantity,
      })
    );
  };

  return (
    <div className="p-2 w-full bg-gray-50 text-black flex justify-between items-center rounded-lg">
      <Image
        src={imgs}
        width={200}
        height={150}
        alt="cart images"
        className="object-cover object-center w-full h-full"
      />
      <div className="flex gap-2 items-center">
        <div>
          <AiOutlineMinus
            onClick={onDecreaseItemQTY}
            size={30}
            className="font-extrabold  btn px-3 py-2 text-xl"
          />
        </div>
        <div>
          <p className="font-bold text-xl">{cartQuantity}</p>
        </div>
        <div>
          <AiOutlinePlus
            onClick={onIncreaseItemQTY}
            size={30}
            className="font-extrabold btn  px-3 py-2 text-xl"
          />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xl text-yellow-600 font-bold uppercase">
          ${price * cartQuantity}
        </p>
        <button>
          <FaTrash size={25} onClick={onRemoveItem} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
