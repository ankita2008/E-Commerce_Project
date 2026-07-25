import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <p>{product.category}</p>

      <Link to={`/product/${product.id}`}>
        <button type="button">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;