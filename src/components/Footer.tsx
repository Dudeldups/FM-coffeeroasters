import { Link } from "react-router-dom";
import coffeeroastersLogo from "../assets/shared/desktop/logo.svg";
import Facebook from "./logos/Facebook";
import Instagram from "./logos/Instagram";
import Twitter from "./logos/Twitter";

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
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
