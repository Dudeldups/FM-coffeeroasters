import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <nav>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/subscribe">Subscribe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
