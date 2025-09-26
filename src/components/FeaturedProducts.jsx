import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FeaturedProducts() {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    fetch("/img/Products/products.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error: ", err));
  }, []);
  return (
    <section>
      <SectionTitle content="Discover Our Featured Products" />
      <div className="w-10/12 mx-auto py-3">
        <div className="grid grid-cols-3 gap-4">
          {data.products.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        <button className="my-4 flex gap-2 items-center justify-center mx-auto font-bold hover:text-lime-400 cursor-pointer transition-all duration-500 ease-linear">
          View More <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
}
