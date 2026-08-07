import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import { useSearchQuery } from "./hooks/useSearch";

function App() {
  const { search, setSearch, clearSearch } = useSearchQuery("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} clearSearch={clearSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;