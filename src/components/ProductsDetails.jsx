import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ShoppingBagIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
const ProductsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => {
    return state.products.items.find((product) => {
      return product.id === Number(id);
    });
  });

  if (!product)
    return (
      <div className="mx-auto  px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return To Home Page
          </Link>
        </div>
      </div>
    );

  return (
    <div className="px-5 py-7 mb-9">
      <div className="max-w-[1500px] mx-auto ">
        <Link
          to="/"
          className="font-semibold  "
        >{`<--- Back to Products`}</Link>
        <div className="flex flex-col sm:flex-row mt-16  ">
          <div className=" shadow-xl h-[500px] w-full lg:mx-20  ">
            <img
              src={product.image}
              alt={`${product.title}-img`}
              className="object-contain h-full w-full "
            />
          </div>

          <div className="flex flex-col justify-center p-8 max-w-[800px] ">
            <h2 className="text-2xl font-bold mb-7">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-7">{product.description}</p>
            <p className="font-semibold text-xl mb-9">{product.price}$</p>
            <p className="font-semibold mb-4">Category</p>
            <p className="bg-gray-200 rounded-full p-1 w-[139px] text-center mb-4">
              {product.category}
            </p>
            <button
              className="bg-black text-white  flex items-center justify-center w-[180px] rounded-sm p-1.5 gap-1 hover:bg-gray-800 transition cursor-pointer"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingBagIcon size={16} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
