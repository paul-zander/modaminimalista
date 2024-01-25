import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <Link to={`/product/${id}`}>
          <div className="w-full h-full flex justify-center items-center hover:border-2 ">
            {/* image */}
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[150px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
        </Link>
        {/* buttons */}
      </div>
      {/* category & title & price */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">
          {price.toFixed(2).replace(".", ",")} €
        </div>
      </div>
    </div>
  );
}

export default Product;
