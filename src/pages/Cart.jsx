import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Cart() {

    const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  const grandTotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

  const increaseQty = (index) => {
    const data = [...cart];
    data[index].quantity += 1;

    setCart(data);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const decreaseQty = (index) => {
    const data = [...cart];

    if (data[index].quantity > 1) {
      data[index].quantity -= 1;
    }

    setCart(data);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const removeItem = (index) => {
    const data = [...cart];

    data.splice(index, 1);

    setCart(data);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const checkout = () => {
  alert("🎉 Order Placed Successfully");

  localStorage.removeItem("cart");

  setCart([]);

  navigate("/");
};

  return (
    <>
      <Navbar />

      <h1 className="title">My Cart</h1>

      <div className="product-container">
        {cart.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          cart.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <p>{item.category}</p>

              <h4>Quantity</h4>

              <div className="qty-btn">
                <button onClick={() => decreaseQty(index)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(index)}>+</button>
              </div>

              <h4>Total : ₹ {item.price * item.quantity}</h4>

              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="grand-total">

  <h2>Grand Total : ₹ {grandTotal}</h2>

   <button onClick={checkout}>
    Checkout
  </button>

</div>
    </>
  );
}

export default Cart;