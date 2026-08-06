import { Routes, Route } from "react-router-dom";
import { useSearchQuery } from "./hooks/useSearch";
 
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const { search, setSearch } = useSearchQuery("");
 
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
 
      <Routes>
       <Route path="/" element={<Home search={search} />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
 
export default App;