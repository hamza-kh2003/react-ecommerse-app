import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { setSelectesItem } from "../features/products/ProductSlice";
const ProductCard = ({ product }) => {
  //const dispatch = useDispatch();
  return (
    <div
      className="shadow-lg  rounded-md  p-3  hover:scale-105 transform transition duration-300"
      // onClick={() => dispatch(setSelectesItem(product))}
    >
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
        <Link to={`product/${product.id}`} className="underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
