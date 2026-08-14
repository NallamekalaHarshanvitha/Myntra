import "./Navbar.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useWishlist } from '../../context/WishlistContext';
 
function Navbar({ search, setSearch }) {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const applySearch = () => {
    if (searchInputRef.current) {
      setSearch(searchInputRef.current.value);
      navigate("/");
    }
  };
  const { items: wishlistItems } = useWishlist();
 
  return (
    <nav className="navbar">
 
      <div className="logo">
        <Link to="/">MYNTRA</Link>
      </div>
 
      <ul className="menu">
 
        <li className="dropdown">
          <Link to="/men">MEN</Link>
 
          <div className="dropdown-content">
            <div>
              <p>T-Shirts</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>Sweatshirts</p>
              <p>Jackets</p>
            </div>
          </div>
        </li>
 
        <li className="dropdown">
          <Link to="/women">WOMEN</Link>
 
          <div className="dropdown-content">
            <div>
              <p>Kurti</p>
              <p>Casual Shirts</p>
              <p>Formal Dresses</p>
              <p>Sweatshirts</p>
              <p>Skirts</p>
            </div>
          </div>
        </li>
 
        <li className="dropdown">
          <Link to="/kids">KIDS</Link>
 
          <div className="dropdown-content">
            <div>
              <p>Boys Clothing</p>
              <p>Girls Clothing</p>
              <p>Accessories</p>
              <p>Toys</p>
            </div>
          </div>
        </li>
 
        <li className="dropdown">
          <Link to="/home-living">HOME DECOR</Link>

          <div className="dropdown-content">
            <div>
              <p>Bedsheets</p>
              <p>Curtains</p>
              <p>Rugs</p>
              <p>Decor</p>
            </div>
          </div>
        </li>
 
        <li className="dropdown">
          <Link to="/beauty">BEAUTY</Link>
 
          <div className="dropdown-content">
            <div>
              <p>Skincare</p>
              <p>Makeup</p>
              <p>Perfumes</p>
            </div>
          </div>
        </li>
 
      </ul>
 
      <div className="search-box">
        <FaSearch />
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for products, brands and more"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <button type="button" className="search-focus-btn" onClick={applySearch}>
          Search
        </button>
      </div>
 
      <div className="icons">
 
        <div className="icon">
          <Link to="/profile" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <FaUser />
            <span>Profile</span>
          </Link>
        </div>
 
        <div className="icon">
          <Link to="/wishlist" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaHeart />
            <span>Wishlist {wishlistItems && wishlistItems.length > 0 ? `(${wishlistItems.length})` : ''}</span>
          </Link>
        </div>
 
        <div className="icon">
          <FaShoppingBag />
          <span>Bag</span>
        </div>
 
      </div>
 
    </nav>
  );
}
 
export default Navbar;