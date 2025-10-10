import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../slice/wishlistSlice";
import { FaRegTrashCan } from "react-icons/fa6";

export default function WishListTable() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <section>
      <div className="px-2 sm:w-10/12 mx-auto py-3 min-h-[60vh]">
        <h1 className="text-center text-xl font-bold py-3">My Wishlist</h1>
        <table className="w-full h-full mt-5">
          <thead className="bg-gray-300">
            <tr className="font-bold">
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Price</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-100 text-center">
                    <td className="py-3">{item.id}</td>
                    <td className="py-3">{item.name}</td>
                    <td className="py-3">{item.price}</td>
                    <td className="py-3">
                      <button
                        onClick={() => handleRemoveWishlist(item.id)}
                        className="text-red-500 cursor-pointer"
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="hover:bg-gray-100 text-center">
                <td className="py-3" colSpan={5}>
                  The Wishlist is empty 📋
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
