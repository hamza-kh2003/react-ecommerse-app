import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-lg  rounded-md cursor-pointer p-3">
      <img
        src={product.image}
        alt={`${product.title}-img`}
        className="w-full h-40 object-contain"
      />
      <div className="bg-gray-50">
        <h2 className="text-lg font-semibold my-4 ">
          {product.title.substring(0, 18) + " ..."}
        </h2>
        <p className="break-words text-sm text-zinc-500  border-b-2  pb-4 ">
          {product.description.substring(0, 45) + " ..."}
        </p>
      </div>
      <div className="flex justify-between mt-4 items-center">
        <p className="text-xl font-semibold">{product.price}$</p>
        <p>View Details...</p>
      </div>
    </div>
  );
};

export default ProductCard;
