import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSearch } from "./hooks/useAppSearch";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const { search, setSearch, clearSearch } = useAppSearch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} clearSearch={clearSearch} />
      <Outlet context={{ search, setSearch, clearSearch }} />
    </>
  );
}

export default App;