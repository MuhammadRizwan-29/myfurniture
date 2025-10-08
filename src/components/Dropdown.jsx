import { useState } from "react";

export default function Dropdown({ products, sortData }) {
  const [sortDropdown, setSortDropdown] = useState("");
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSortDropdown(value);

    let sortProducts = [...products];
    switch (value) {
      case "price-asc":
        sortProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    sortData({ products: sortProducts });
  };
  return (
    <section>
      <div className="w-10/12 mx-auto py-3">
        <div className="flex flex-col items-end">
          <select
            name=""
            id="sort-dropdown"
            value={sortDropdown}
            onChange={handleSelectChange}
            className="focus:outline-none border border-gray-200 py-2 px-3 rounded-md bg-white"
          >
            <option value="">Select...</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>
    </section>
  );
}
