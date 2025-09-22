import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../features/products/ProductSlice";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchProduct = useSelector((state) => state.products.searchItem);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white   p-5  ">
      <div className="max-w-[1500px]  mx-auto">
        <ul className=" flex   flex-col  items-center shadow-md p-2  md:flex-row  sm:justify-between">
          <li className="mb-3 md:mb-0">
            <Link className="mr-4" to="/">
              Home
            </Link>

            <Link className="mr-4">About</Link>

            <Link className="mr-4">FAQs</Link>

            <Link>Contact</Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <User
              size={40}
              className="bg-gray-200 text-black rounded cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
              <div className="flex  flex-col absolute right-1 bg-gray-100 w-[110px] border p-1 z-10">
                <Link to="/" className="hover:underline hover:bg-gray-200">
                  Sign
                </Link>
                <Link to="/" className="hover:underline hover:bg-gray-200">
                  My Account
                </Link>
              </div>
            )}
          </li>
        </ul>
        <nav className="py-5 flex items-center justify-between ">
          <Link
            to="/"
            className="bg-gray-700 px-2 py-1 text-white font-extrabold text-lg  rounded-sm"
          >
            audiophile
          </Link>
          <input
            type="text"
            placeholder="Search Product"
            className=" bg-zinc-100 border border-zinc-200  mx-3 sm:mx-0  max-w-[200px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] w-full  p-1 outline-none  rounded-sm"
            value={searchProduct}
            onChange={(e) => {
              dispatch(setSearchItem(e.target.value));
            }}
          />
          <Link to="">
            <ShoppingCart
              size={54}
              className="cursor-pointer bg-gray-100 py-2 px-3 rounded-full"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
