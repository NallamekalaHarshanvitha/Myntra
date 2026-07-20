import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
 
function ProductCard({ product }) {
  const navigate = useNavigate();
 
  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.name} />
 
      <h3>{product.brand}</h3>
 
      <p>{product.name}</p>
 
      <h4>₹ {product.price}</h4>
 
      <button>Add to Bag</button>
    </div>
  );
}
 
export default ProductCard;