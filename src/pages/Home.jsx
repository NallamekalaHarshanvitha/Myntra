import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { useFilteredProducts } from "../hooks/useSearch";
 
function Home({ search }) {
  const filteredProducts = useFilteredProducts(products, search);
 
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>No products found.</h2>
      )}
    </div>
  );
}
 
export default Home;