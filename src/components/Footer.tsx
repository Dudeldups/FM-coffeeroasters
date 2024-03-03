import { Link } from "react-router-dom";
import coffeeroastersLogoWhite from "../assets/shared/desktop/logo-white.svg";
import Facebook from "./logos/Facebook";
import Instagram from "./logos/Instagram";
import Twitter from "./logos/Twitter";

const Footer = () => {
  return (
    <footer className="w-full px-4 pb-10 xs:px-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center bg-custom-dark-blue px-5 py-12 lg:flex-row lg:gap-14 lg:px-12 xl:gap-24 xl:px-20">
        <img
          className="w-52 sm:w-60"
          src={coffeeroastersLogoWhite}
          alt="Coffeeroasters logo"
        />

        <nav className="mt-10 md:mt-8 lg:mt-0">
          <ul className="flex flex-col items-center gap-3 font-bold text-custom-light-grey md:flex-row md:gap-8">
            <li>
              <Link
                className="transition-colors hover:text-white focus-visible:text-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-white focus-visible:text-white"
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-white focus-visible:text-white"
                to="/subscribe"
              >
                Create your plan
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="mt-10 flex items-center justify-center gap-6 text-custom-light-cream md:mt-14 lg:ml-auto lg:mt-0">
          <li>
            <a
              className="transition-colors hover:text-custom-pale-orange focus-visible:text-custom-pale-orange"
              href="/"
              aria-label="facebook"
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-custom-pale-orange focus-visible:text-custom-pale-orange"
              href="/"
              aria-label="twitter"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-custom-pale-orange focus-visible:text-custom-pale-orange"
              href="/"
              aria-label="instagram"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
