import React from "react";
import { IoCart } from "react-icons/io5";
const CardButton = () => {
  return (
    <>
      <div className="cart-button fixed bottom-12 right-12 flex justify-center items-center">
        <button className="w-16 h-16 bg-primary text-white transition-all duration-150 ease-in-out shadow-2xl hover:opacity-90 rounded-full flex justify-center items-center">
          <IoCart size={30} className=""/>
        </button>
      </div>
    </>
  );
};

export default CardButton;
