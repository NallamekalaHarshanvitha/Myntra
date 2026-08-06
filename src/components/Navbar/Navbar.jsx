import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
 
function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
 
  const handleSearchChange = (value) => {
    setSearch(value);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
 
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
          type="text"
          placeholder="Search for products, brands and more"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
 
      <div className="icons">
 
        <div className="icon">
          <FaUser />
          <span>Profile</span>
        </div>
 
        <div className="icon">
          <FaHeart />
          <span>Wishlist</span>
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