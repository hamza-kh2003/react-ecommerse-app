import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  bg-slate-900 shadow-md   ">
      <div className="py-9 px-4 max-w-[1500px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center ">
          <h1 className="text-white font-bold text-2xl text-center sm:text-left ">
            Subscribe Our Newsletter
          </h1>
          <form className="p-2 sm:w-[60%] md:w-[50%] lg:w-1/3 w-full flex  relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="py-4  px-4 rounded shadow-md  border focus:outline-none bg-white placeholder-gray-500  w-full  "
            />
            <button className="p-1 md:p-2 rounded-xl bg-gray-300 cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2  ">
              Submit Now !
            </button>
          </form>
        </div>
        <div className="grid  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-7  text-white py-9 ">
          <div>
            <h2 className="font-bold text-lg mb-5">adiophile:</h2>
            <p className="text-sm mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              vitae facilis nam deleniti neque. Amet?
            </p>
            <div className="flex">
              <a className="mr-10">
                <Facebook />
              </a>
              <a className="mr-10">
                <Twitter />
              </a>
              <a className="mr-10">
                <Instagram />
              </a>
              <a>
                <Youtube />
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-5">Pages:</h2>
            <div className="flex flex-col">
              <Link to="">Home</Link>
              <Link to="">About</Link>
              <Link to="">FAQs</Link>
              <Link to="">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-5">Categories:</h2>
            <ul>
              <li>Monitors</li>
              <li>GPUs</li>
              <li>Laptops</li>
              <li>Power Supply</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-5">Contact Info:</h2>
            <ul>
              <li>Amman City</li>
              <li>Jordan</li>
              <li>0789367253</li>
              <li>0782635142</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white text-center p-3 ">
        COPY RIGHT &copy; 2025 , HAMZA-KH
      </div>
    </footer>
  );
};

export default Footer;
