import { Link } from "react-router-dom";
import coffeeroastersLogoWhite from "../assets/shared/desktop/logo-white.svg";
import Facebook from "./logos/Facebook";
import Instagram from "./logos/Instagram";
import Twitter from "./logos/Twitter";

//TODO: Add the correct links to the footer
//TODO: Add hover and focus states to the links

const Footer = () => {
  return (
    <footer className="flex justify-center px-6 pb-10 sm:px-10">
      <div className="flex w-full max-w-7xl flex-col items-center bg-custom-dark-blue px-5 py-12 lg:flex-row lg:gap-14 lg:px-12 xl:gap-24 xl:px-20">
        <img
          className="w-52 sm:w-60"
          src={coffeeroastersLogoWhite}
          alt="Coffeeroasters logo"
        />

        <nav className="mt-10 md:mt-8 lg:mt-0">
          <ul className="flex flex-col items-center gap-3 font-bold text-custom-light-grey md:flex-row md:gap-8">
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

        <ul className="mt-10 flex items-center justify-center gap-6 md:mt-14 lg:ml-auto lg:mt-0">
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
