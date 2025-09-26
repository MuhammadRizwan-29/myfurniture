import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Categories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/img/Category/categories.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error: ", err));
  }, []);
  return (
    <section>
      <SectionTitle content="Discover Our Featured Products" />
      <div className="w-10/12 mx-auto px-2">
        <div className="w-full grid grid-cols-8 gap-3 py-5 px-2">
          {data.map((category, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-32 h-32 justify-center items-center p-3 rounded-full bg-lime-200"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10"
                />
                <h1 className="text-sm py-2 text-nowrap">{category.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
