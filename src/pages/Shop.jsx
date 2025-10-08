import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Shop() {
  const [data, setData] = useState({ products: [] });
  const { products } = data;
  const [initialProducts, setInitialProducts] = useState([]);

  useEffect(() => {
    fetch("/img/Products/products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setInitialProducts(data.products);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <main>
      <Dropdown products={initialProducts} sortData={setData} />
      <FeaturedProducts products={products} />
    </main>
  );
}
