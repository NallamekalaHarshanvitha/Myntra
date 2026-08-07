import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { useFilteredProducts } from "../hooks/useSearch";

function Men({ search }) {
  const filteredProducts = useFilteredProducts(products, search);
  const menProducts = filteredProducts.filter(
    (product) => product.category === "Men"
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Men</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {menProducts.length > 0 ? (
          menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2>No men products found.</h2>
        )}
      </div>
    </div>
  );
}
 
export default Men;