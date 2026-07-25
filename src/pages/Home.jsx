import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {

  const [productList, setProductList] = useState(products);

  const filterProduct = (category) => {
    if (category === "All") {
      setProductList(products);
    } else {
      const data = products.filter((item) => item.category === category);
      setProductList(data);
    }
  };

  return (
    <>
      <Navbar />

      <h1 className="title">All Products</h1>

      <div className="filter-btn">

        <button onClick={() => filterProduct("All")}>All</button>

        <button onClick={() => filterProduct("Shoes")}>Shoes</button>

        <button onClick={() => filterProduct("Clothes")}>Clothes</button>

        <button onClick={() => filterProduct("Watch")}>Watch</button>

      </div>

      <div className="product-container">
        {productList.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>

    </>
  );
}

export default Home;