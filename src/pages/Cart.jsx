// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

// function Cart() {

//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartData);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <h1 className="title">My Cart</h1>

//       <div className="product-container">

//         {cart.length === 0 ? (
//           <h2>Cart is Empty</h2>
//         ) : (
//           cart.map((item, index) => (
//             <div className="card" key={index}>

//               <img src={item.image} alt={item.name} />

//               <h3>{item.name}</h3>

//               <p>₹ {item.price}</p>

//               <p>{item.category}</p>

//             </div>
//           ))
//         )}

//       </div>
//     </>
//   );
// }

// export default Cart;



import { useState } from "react";
import products from "../data/products";

function Cart() {

  const [cart, setCart] = useState(products);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };


  return (
    <div>

      <h1>My Cart</h1>

      {
        cart.map((item)=>(
          <div key={item.id}>

            <h2>{item.name}</h2>

            <p>Price: ₹{item.price}</p>

            <p>{item.category}</p>

            <button onClick={()=>removeItem(item.id)}>
              Remove
            </button>

            <hr/>

          </div>
        ))
      }


      <h2>
        Total: ₹
        {
          cart.reduce(
            (total,item)=> total + item.price,
            0
          )
        }
      </h2>


    </div>
  )
}

export default Cart;