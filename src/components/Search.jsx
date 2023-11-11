import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Search({ isActive }) {
  const { setProducts, allClothing } = useContext(ProductContext);

  function handleChange(e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredProducts = allClothing.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );

    setProducts(filteredProducts);
  }

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="Search products..."
      className={`${
        isActive ? "bg-slate-100 " : "bg-transparent "
      } border-black placeholder-black w-[300px] px-1 focus:outline-none border-2 placeholder:text-sm`}
    ></input>
  );
}

export default Search;
