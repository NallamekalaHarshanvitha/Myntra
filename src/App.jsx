import { Routes, Route } from "react-router-dom";
import { useSearchQuery } from "./hooks/useSearch";
 
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { useSearchQuery } from "./hooks/useSearch";

function App() {
 
  const { search, setSearch, clearSearch } = useSearchQuery("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} clearSearch={clearSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;