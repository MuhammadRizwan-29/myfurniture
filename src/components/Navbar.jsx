import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartOffset from "./CartOffset";
import WishList from "./WishList";

export default function Navbar() {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Wishlist",
      path: "/wishlist",
    },
  ];
  return (
    <header className="w-full flex justify-center items-center">
      <div className="w-10/12 px-2 py-4 flex justify-center items-center">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl">MyFurniture</h1>
        </div>
        <nav className="flex-1 flex justify-center items-center">
          <ul className="flex gap-2 justify-center items-center">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex-1 flex justify-end items-center text-xl gap-2">
          <WishList />
          <CartOffset />
        </div>
      </div>
    </header>
  );
}
