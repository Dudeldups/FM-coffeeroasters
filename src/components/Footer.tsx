import { Link } from "react-router-dom";
import coffeeroastersLogo from "../assets/shared/desktop/logo.svg";
import Facebook from "./logos/Facebook";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={coffeeroastersLogo} alt="Coffeeroasters logo" />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/subscribe">Create your plan</Link>
            </li>
          </ul>
        </nav>

        <ul>
          <li>
            <Facebook />
          </li>
          <li>Social</li>
          <li>Social</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
