import { FaRegEye, FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="w-full h-full group cursor-pointer">
      <div className="relative overflow-hidden">
        <img src={product.images[0]} alt={product.name} />
        <div className="absolute -bottom-20 group-hover:bottom-2 w-full transition-all duration-500 ease-in-out">
          <button className="w-full block mx-auto bg-lime-400 py-2 cursor-pointer transition-all duration-500 ease-in-out">
            Add to Cart
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 gap-3  transition-all duration-500 ease-in-out">
          <button className="bg-lime-200 hover:bg-lime-400 p-3 rounded-full cursor-pointer">
            <FaRegHeart />
          </button>
          <button className="bg-lime-200 hover:bg-lime-400 p-3 rounded-full cursor-pointer">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="py-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{product.name}</h1>
          <h4 className="font-bold text-lime-500">{product.price}</h4>
        </div>
      </div>
    </div>
  );
}
