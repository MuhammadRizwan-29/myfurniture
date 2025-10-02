import { FaFacebook, FaRegCopyright } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 ">
      <div className="w-10/12 mx-auto">
        <div className="w-full h-full flex justify-center items-start gap-4">
          <div className="basis-[40%]">
            <h1 className="logo font-bold text-2xl">Furniture</h1>
            <p className="text-sm text-gray-500 italic py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              laudantium dicta beatae harum assumenda pariatur est! Voluptates,
              iste! Cum rerum nihil, eveniet delectus recusandae accusantium
              adipisci non atque nesciunt ipsum!
            </p>
          </div>
          <div className="basis-[20%]">
            <h1 className="text-xl font-bold py-2">Quick Links</h1>
            <ul className="flex-1">
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Home
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                About
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Contact
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Shop
              </li>
            </ul>
          </div>
          <div className="basis-[20%]">
            <h1 className="text-xl font-bold py-2">Terms & Conditions</h1>
            <ul className="flex-1">
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Privacy Policy
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Terms of use
              </li>
            </ul>
          </div>
          <div className="basis-[20%]">
            <h1 className="text-xl font-bold py-2">Social Links</h1>
            <ul className="flex items-center gap-4 text-2xl w-fit">
              <li className="font-bold">
                <button className="p-2 bg-black text-lime-400 hover:text-white transition-all duration-300 ease-linear rounded-sm cursor-pointer">
                  <FaFacebook />
                </button>
              </li>
              <li className="font-bold">
                <button className="p-2 bg-black text-lime-400 hover:text-white transition-all duration-300 ease-linear rounded-sm cursor-pointer">
                  <FaSquareInstagram />
                </button>
              </li>
              <li className="font-bold">
                <button className="p-2 bg-black text-lime-400 hover:text-white transition-all duration-300 ease-linear rounded-sm cursor-pointer">
                  <FaSquareXTwitter />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mx-auto mt-3 py-3 border-t border-gray-600">
          <h4 className="flex items-center gap-2">
            <FaRegCopyright /> All rights resereved Furniture 2025.
          </h4>
          <img
            src="/img/card.png"
            alt="card"
            className="w-full h-full max-w-[200px]"
          />
        </div>
      </div>
    </footer>
  );
}
