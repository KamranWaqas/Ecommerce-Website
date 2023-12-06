import React from "react";
import "./card.css"

const HomeSectionCard = ({ product }) => {
  return (
    <div className="py-2 custome-response">
      <div className=" cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg  overflow-x-hidden w-[15rem] ml-3 h-[20rem] hover:shadow-2xl">
      <div className="h-[13rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
    </div>
  );
};

export default HomeSectionCard;
