import { Routes, Route } from "react-router-dom";
import { useState } from "react";
 
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";

function App() {
  const [search, setSearch] = useState("");
 
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
 
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
 
export default App;