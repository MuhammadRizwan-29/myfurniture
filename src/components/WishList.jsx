import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { FaRegTrashCan } from "react-icons/fa6";
import { removeFromWishlist } from "../slice/wishlistSlice";

export default function WishList() {
  const [open, setOpen] = useState(false);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <div>
      <button
        className="bg-lime-100 h-10 w-10 flex justify-center items-center rounded-full hover:bg-lime-300 cursor-pointer transition-all duration-300 ease-linear relative"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="bg-lime-400 text-xs absolute -top-1 right-1 h-4 w-4 flex items-center justify-center rounded-full">
          {wishlistItems.length}
        </span>
        <FaRegHeart />
      </button>

      <div
        className={`w-full fixed top-0 right-0 h-screen max-h-screen z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        {/* Blurness */}
        <div
          className={`z-[60] fixed top-0 h-full w-full bg-lime-400/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
        {/* Content */}
        <div
          className={`bg-white z-[100] w-full max-w-sm h-full ml-auto relative ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-center items-center px-3 py-2">
            <div className="w-11/12">
              <h1 className="font-bold">My Wish List</h1>
            </div>
            <div className="w-1/12">
              <button
                className="p-3 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
          <div className="px-3">
            <ul>
              {wishlistItems.length > 0 &&
                wishlistItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="flex justify-center items-center gap-4 bg-amber-50 py-2 group cursor-pointer"
                    >
                      <div className="w-24 h-24 overflow-hidden">
                        <img
                          src={item.img[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">{item.name}</h1>
                        <h4 className="text-lime-600 text-sm">${item.price}</h4>
                      </div>
                      <div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 opacity-0 group-hover:opacity-100"
                        >
                          <FaRegTrashCan />
                        </button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
