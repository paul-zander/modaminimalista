import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Filter() {
  const [isActive, setIsActive] = useState("all");
  const { products, setProducts, allClothing, setAllClothing } =
    useContext(ProductContext);

  function handleFilterAllClothing() {
    setProducts(allClothing);
    setIsActive("all");
  }

  function handleFilterWomensClothing() {
    setProducts(
      allClothing.filter((product) => product.category === "women's clothing")
    );
    setIsActive("woman");
  }

  function handleFilterMensClothing() {
    setProducts(
      allClothing.filter((product) => product.category === "men's clothing")
    );
    setIsActive("man");
  }

  return (
    <div className=" sm:gap-[12px] flex flex-wrap justify-center gap-[12px]">
      <button
        onClick={handleFilterAllClothing}
        className={`${
          isActive === "all" ? "border-black text-black" : ""
        } border-2 border-gray-400 text-base text-gray-400 active:bg-slate-500 flex justify-center items-center py-2 px-8 transition-all`}
      >
        All
      </button>
      <button
        onClick={handleFilterWomensClothing}
        className={`${
          isActive === "woman" ? "border-black text-black" : ""
        } border-2 border-gray-400 text-base text-gray-400 active:bg-slate-500 flex justify-center items-center py-2 px-8 transition-all`}
      >
        Woman
      </button>
      <button
        onClick={handleFilterMensClothing}
        className={`${
          isActive === "man" ? "border-black text-black" : ""
        } border-2 border-gray-400 text-base text-gray-400 active:bg-slate-500 flex justify-center items-center py-2 px-8 transition-all `}
      >
        Man
      </button>
    </div>
  );
}

export default Filter;
