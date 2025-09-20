import ProductsGrid from "./ProductsGrid";

const productsCatagories = [
  "All",
  "Graphic Cards",
  "Laptop",
  "Monitors",
  "Power Supply",
];

const Home = () => {
  return (
    <div>
      <div className="bg "></div>
      <div className="p-5 ">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 gap-2 sm:block">
          {productsCatagories.map((cat, index) => {
            return (
              <button
                key={index}
                className="bg-gray-300 py-2 px-4 rounded-md text-black hover:bg-zinc-400 transition-all ease-in active:scale-105 mr-4 cursor-pointer "
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <ProductsGrid />
    </div>
  );
};

export default Home;
