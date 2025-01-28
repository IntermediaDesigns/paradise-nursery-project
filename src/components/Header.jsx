import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  
  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{cartQuantity}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;