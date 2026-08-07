import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useWishlist } from '../../context/WishlistContext';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { toggle, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.name} />

      <h3>{product.brand}</h3>

      <p>{product.name}</p>

      <p className="category">{product.category}</p>

      <h4>₹ {product.price}</h4>

      <div style={{ display: 'flex', gap: 8 }}>
        <button>Add to Bag</button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle(product);
          }}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          style={{ color: inWishlist ? 'White' : 'inherit' }}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;