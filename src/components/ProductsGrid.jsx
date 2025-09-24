import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/ProductSlice";
const ProductsGrid = () => {
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredItems);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        //setProducts(response.data);
        dispatch(setProducts(response.data));
      } catch (err) {
        if (err.response) {
          console.log("Server responded with status:", err.response.status);
          console.log(err.response.data);
        } else if (err.request) {
          console.log("No response received:", err.request);
        } else {
          console.log("Error setting up request:", err.message);
        }
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <div className="p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 max-w-[1500px] mx-auto w-full my-24">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : (
        " No Product Found..."
      )}
    </>
  );
};

export default ProductsGrid;
