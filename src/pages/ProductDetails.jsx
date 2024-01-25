import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { Link, useParams } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { IoMdArrowBack } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((product) => product.id === +id);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <CgSpinner className="animate-spin text-slate-900 h-8 w-8" />
      </section>
    );
  }

  function handleAddToCart() {
    if (product.id === 1) {
      addToCart(product, id);
    } else {
      addToCart(product, `${product.id}-${selectedSize}`, selectedSize);
    }
  }

  const { title, price, description, image } = product;

  function handleSelectedSize(size) {
    setSelectedSize(size);
  }
  return (
    <section className="h-screen relative pt-[600px] pb-[500px] sm:pt-64 sm:pb-32 lg:py-32 flex items-center">
      <div className="absolute left-[20px] top-[150px] sm:left-[80px] sm:top-[200px] lg:top-[150px] flex items-center gap-3">
        <Link to="/">
          <IoMdArrowBack size={25} />
        </Link>
      </div>
      <div className="container mx-auto">
        <Toaster />
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 justify-center text-center lg:text-left flex items-center flex-col lg:items-start lg:mr-10">
            <div className="flex gap-4 items-center mb-2">
              <h1 className="text-[26px] font-medium  max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <BsBookmark className="text-lg cursor-pointer" />
            </div>
            <div className="text-xl text-slate-500 font-medium">
              {price.toFixed(2).replace(".", ",")} €
            </div>
            <p className="mb-8">{description}</p>
            <div className="flex gap-4 flex-col max-w-sm">
              {product.id !== 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSelectedSize("S")}
                    className={`${
                      selectedSize === "S" && "border-black"
                    } flex flex-1 justify-center border-2 w-[60px] p-2 text-center text-primary`}
                  >
                    S
                  </button>
                  <button
                    onClick={() => handleSelectedSize("M")}
                    className={`${
                      selectedSize === "M" && "border-black"
                    } flex flex-1 justify-center border-2 w-[60px] p-2 text-center text-primary`}
                  >
                    M
                  </button>
                  <button
                    onClick={() => handleSelectedSize("L")}
                    className={`${
                      selectedSize === "L" && "border-black"
                    } flex flex-1 justify-center border-2 w-[60px] p-2 text-center text-primary`}
                  >
                    L
                  </button>
                  <button
                    onClick={() => handleSelectedSize("XL")}
                    className={`${
                      selectedSize === "XL" && "border-black"
                    } flex flex-1 justify-center border-2 w-[60px] p-2 text-center text-primary`}
                  >
                    XL
                  </button>
                </div>
              )}
              <button
                onClick={handleAddToCart}
                className="bg-primary hover:bg-slate-700 active:bg-slate-500 py-4 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
