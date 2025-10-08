import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { addToWishlist } from "../slice/wishlistSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  const handleAddToWishList = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="w-full h-full group cursor-pointer">
      <div className="relative overflow-hidden">
        <img src={product.images[0]} alt={product.name} />
        <div className="absolute -bottom-20 group-hover:bottom-2 w-full transition-all duration-500 ease-in-out">
          <button
            onClick={handleAddToCart}
            className={`w-full block mx-auto ${
              isInCart
                ? "bg-gray-200 hover:bg-gray-400"
                : "bg-lime-200 hover:bg-lime-400"
            } py-2 cursor-pointer transition-all duration-500 ease-in-out`}
          >
            {isInCart ? "Item in Cart" : "Add to Cart"}
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 gap-3  transition-all duration-500 ease-in-out">
          <button
            onClick={handleAddToWishList}
            className={`p-3 rounded-full cursor-pointer ${
              isInWishlist
                ? "bg-red-500 text-white"
                : "bg-lime-200 hover:bg-lime-400"
            }`}
          >
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
