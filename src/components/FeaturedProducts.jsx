import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FeaturedProducts({ currentPage, products }) {
  return (
    <section>
      <SectionTitle content="Discover Our Featured Products" />
      <div className="w-10/12 mx-auto py-3">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        {currentPage === "home" && (
          <button className="my-4 flex gap-2 items-center justify-center mx-auto font-bold hover:text-lime-400 cursor-pointer transition-all duration-500 ease-linear">
            View More <FaArrowRightLong />
          </button>
        )}
      </div>
    </section>
  );
}
