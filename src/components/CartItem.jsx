import { Plus, Minus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/CartSlice";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const itemPrice = item.price * item.quantity;
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg flex flex-col sm:flex-row sm:justify-between p-3 mb-7 ">
      <div className="flex items-center  gap-3  ">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={`${item.title}-img`}
            className="h-32 w-60 object-contain  "
          />
        </Link>
        <div>
          <h2 className="font-bold ">{item.title}</h2>
          <p className="text-gray-600">{item.price}$</p>
          <div className="flex items-center gap-3 mt-3">
            <Plus
              size="18"
              className="cursor-pointer"
              onClick={() =>
                dispatch(
                  updateQuantity({ ...item, quantity: item.quantity + 1 })
                )
              }
            />
            <span>{item.quantity.toFixed(2)}</span>
            <Minus
              size="18"
              className="cursor-pointer"
              onClick={() =>
                dispatch(
                  updateQuantity({ ...item, quantity: item.quantity - 1 })
                )
              }
            />
            <Trash
              color="red"
              size="18"
              className="cursor-pointer"
              onClick={() => dispatch(removeFromCart(item))}
            />
          </div>
        </div>
      </div>
      <p className="ml-6 font-bold text-xl ">${itemPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
