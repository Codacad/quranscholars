import React from "react";
import { IoCart } from "react-icons/io5";
const CardButton = () => {
  return (
    <>
      <div className="cart-button fixed md:bottom-12 md:right-12 bottom-4 right-4 flex justify-center items-center">
        <button className="w-16 h-16  bg-blue-500 text-white transition-all duration-150 ease-in-out shadow-2xl hover:opacity-90 rounded-full flex justify-center items-center">
          <IoCart size={30} className=""/>
        </button>
      </div>
    </>
  );
};

export default CardButton;
