import { useParams } from "react-router-dom";
import products from "../data/products";
 
function ProductDetails() {
 
  const { id } = useParams();
 
  const product = products.find(
    (item) => item.id === Number(id)
  );
 
  if (!product) {
    return <h2>Product not found</h2>;
  }
 
  return (
    <div
      style={{
        display: "flex",
        padding: "40px",
        gap: "40px"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "350px" }}
      />
 
      <div>
        <h1>{product.brand}</h1>
 
        <h2>{product.name}</h2>
 
        <h3>₹ {product.price}</h3>
 
        <button
          style={{
            padding: "12px 25px",
            background: "#ff3f6c",
            color: "white",
            border: "none",
            marginTop: "20px",
            cursor: "pointer"
          }}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
 
export default ProductDetails;