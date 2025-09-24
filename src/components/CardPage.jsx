import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CardPage = () => {
  const items = useSelector((state) => state.cart.items);
  //const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-5">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="font-bold text-lg mt-3 mb-10">Shopping Cart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2">
            {items.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>

          <div className="shadow-xl h-[280px]  p-3 flex flex-col justify-center ">
            <h2 className="font-bold mb-5 text-lg">Order Summary:</h2>
            <div className="flex justify-between text-gray-600 mb-3 text-sm">
              <p>Subtotal</p>
              <span>$0.00</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-3 text-sm">
              <p>Shipping</p>
              <span>free</span>
            </div>

            <div className="flex justify-between font-bold mb-6">
              <p>Total</p>
              <span>$0.00</span>
            </div>

            <button className="w-full bg-black text-white rounded-sm p-2 cursor-pointer hover:bg-gray-800 transition ">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
