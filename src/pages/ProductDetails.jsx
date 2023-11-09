import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { useParams } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((product) => product.id === +id);

  console.log(product);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <CgSpinner className="animate-spin text-slate-900 h-8 w-8" />
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="h-screen pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-slate-500 font-medium mb-6">
              {price.toFixed(2).replace(".", ",")} €
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary hover:bg-slate-700 active:bg-slate-500 py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
