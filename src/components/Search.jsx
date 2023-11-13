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
      className="py-2 px-8 border-gray-400 placeholder-gray-400 w-[300px] focus:outline-none border-2 placeholder:text-sm focus:border-black focus:placeholder-black"
    ></input>
  );
}

export default Search;
