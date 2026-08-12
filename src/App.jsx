import { Outlet } from "react-router-dom";
import { useSearchQuery } from "./hooks/useSearch";
 
import Navbar from "./components/Navbar/Navbar";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  const { search, setSearch, clearSearch } = useSearchQuery("");

  return (
    <WishlistProvider>
      <Navbar search={search} setSearch={setSearch} clearSearch={clearSearch} />
      <Outlet context={{ search, setSearch, clearSearch }} />
    </WishlistProvider>
  );
}

export default App;