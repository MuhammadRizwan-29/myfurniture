import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import HomeSlider from "../components/HomeSlider";
import NewsLetter from "../components/Newsletter";
import OfferBanner from "../components/OfferBanner";

export default function Home() {
  const [data, setData] = useState({ products: [] });
  const { products } = data;
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    fetch("/img/Products/products.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <main>
      <HomeSlider />
      <Categories />
      <FeaturedProducts currentPage={currentPage} products={products} />
      <OfferBanner />
      <NewsLetter />
    </main>
  );
}
