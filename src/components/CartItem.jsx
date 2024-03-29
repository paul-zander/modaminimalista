import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

function CartItem({ item }) {
  const { id, title, image, price, amount, selectedSizes } = item;
  const { cart, removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-slate-200 w-full font-light text-slate-500">
      {/* image */}
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium
            max-w-[240px] text-primary hover:text-slate-600"
            >
              {title} {selectedSizes && `Size: ${selectedSizes.at(0)}`}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-slate-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center border text-primary font-medium">
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex items-center justify-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex items-center justify-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              {price.toFixed(2).replace(".", ",")} €
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {(amount * price).toFixed(2).replace(".", ",")} €
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
