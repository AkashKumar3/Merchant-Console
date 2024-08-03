import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button 
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {cartData?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 mb-4"
          >
            <div className="flex items-center leading-8 gap-5 p-4">
              <img className="rounded-lg h-24 w-24 object-cover" src={item.image} alt={item.name} />
              <div className="flex-1">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.category}</p>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-semibold text-lg">{item.price}</p>
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-l" aria-label="Decrease quantity">
                      <AiOutlineMinus />
                    </button>
                    <p className="p-2 text-green-600">0</p>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-r" aria-label="Increase quantity">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
