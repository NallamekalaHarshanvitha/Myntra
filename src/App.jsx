import { Routes, Route } from "react-router-dom";
import { useSearchQuery } from "./hooks/useSearch";
 
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
 
  const { search, setSearch, clearSearch } = useSearchQuery("");

  return (
    <WishlistProvider>
      <Navbar search={search} setSearch={setSearch} clearSearch={clearSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/men" element={<Men search={search} />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </WishlistProvider>
  );
}

export default App;