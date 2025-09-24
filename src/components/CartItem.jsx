import { Plus, Minus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg flex flex-col sm:flex-row sm:justify-between p-3 mb-7 ">
      <div className="flex items-center  gap-3  ">
        <img
          src={item.image}
          alt={`${item.title}-img`}
          className="h-32 w-40 object-contain"
        />
        <div>
          <h2 className="font-bold ">{item.title}</h2>
          <p className="text-gray-600">{item.price}$</p>
          <div className="flex items-center gap-3 mt-3">
            <Plus size="18" className="cursor-pointer" />
            <span>{item.quantity}</span>
            <Minus size="18" className="cursor-pointer" />
            <Trash
              color="red"
              size="18"
              className="cursor-pointer"
              onClick={() => dispatch(removeFromCart(item))}
            />
          </div>
        </div>
      </div>
      <p className="ml-6 font-bold text-xl ">$0.00</p>
    </div>
  );
};

export default CartItem;
