import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Product from "../components/Product.jsx";
import Hero from "../components/Hero";
import Filter from "../components/Filter.jsx";
import Search from "../components/Search.jsx";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <div className="items-center container gap-[12px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between py-12">
        {/* searchbar */}
        <Search />
        <Filter />
      </div>

      <section className="pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
