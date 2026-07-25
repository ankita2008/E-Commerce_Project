import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";

function ProductDetails() {
 
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product Added To Cart");
};

  return (
    <>
      <Navbar />

      <div className="details">
        <img src={product.image} alt={product.name} />

        <div>
          <h1>{product.name}</h1>

          <h2>₹ {product.price}</h2>

          <h3>Category : {product.category}</h3>

          <p>{product.description}</p>

          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
