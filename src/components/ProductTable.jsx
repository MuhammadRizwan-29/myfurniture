import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateCart } from "../slice/cartSlice";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ProductTable() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount.toFixed(2));
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateCart({ id, quantity: newQuantity }));
  };

  return (
    <section>
      <div className="px-2 sm:w-10/12 mx-auto py-3 min-h-[60vh]">
        <h1 className="text-center text-xl font-bold py-3">My Cart</h1>
        <table className="w-full h-full mt-5">
          <thead className="bg-gray-300">
            <tr className="font-bold">
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Quantity</th>
              <th className="py-3">Price</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-100 text-center">
                    <td className="py-3">{item.id}</td>
                    <td className="py-3">{item.name}</td>
                    <td className="py-3">
                      <input
                        type="number"
                        onChange={(e) => handleQuantityChange(item.id, e)}
                        value={item.quantity}
                        className="focus:outline-none focus:border-none w-20 bg-gray-50 px-2 py-3"
                      />
                    </td>
                    <td className="py-3">{item.price}</td>
                    <td className="py-3">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
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
                  The Cart is empty 🛒
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-gray-300 w-full">
            <tr className="w-full">
              <td className="p-3" colSpan={2}>
                <b>Total Quantity:</b> {totalQuantity}
              </td>
              <td className="p-3 text-right text-green-700" colSpan={3}>
                <b>Total Amount:</b> $ {totalAmount}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end py-4">
          <button
            onClick={handleEmptyCart}
            className="text-red-500 flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaRegTrashCan /> Empty Cart
          </button>
        </div>
      </div>
    </section>
  );
}
