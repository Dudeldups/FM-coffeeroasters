import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import coffeeroastersLogo from "../assets/shared/desktop/logo.svg";

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setShowNavbar(true), 300);
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setShowNavbar(false), 400);
    }
  }, [isHamburgerMenuOpen]);

  return (
    <header className="relative flex px-6 py-8">
      <Link to="/" className="mr-auto self-center">
        <img
          className="max-w-40"
          src={coffeeroastersLogo}
          alt="Coffeeroasters logo"
        />
      </Link>

      <button
        className="inline-flex aspect-square w-10 items-center p-1 md:hidden"
        aria-controls="nav-list"
        aria-expanded={isHamburgerMenuOpen}
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">
          {isHamburgerMenuOpen ? "Open" : "Close"} navigation list
        </span>
        <span
          className={`relative h-1 w-full rounded-full bg-black transition-colors duration-300 ease-in-out before:absolute before:inset-0 before:h-1 before:rounded-full before:bg-black before:transition-[transform] before:duration-300 before:ease-in-out after:absolute after:inset-0 after:h-1 after:rounded-full after:bg-black after:transition-[transform] after:duration-300 after:ease-in-out ${isHamburgerMenuOpen ? "bg-transparent before:-rotate-45 before:delay-300 after:rotate-45 after:delay-300" : "delay-200 before:-translate-y-2 after:translate-y-2"}`}
        ></span>
      </button>

      <nav
        id="nav-list"
        aria-live="polite"
        className={`navbar via:50% mobile:absolute mobile:h-screen mobile:w-full mobile:-translate-x-6 mobile:translate-y-[4rem] mobile:bg-gradient-to-b mobile:from-custom-light-cream mobile:via-custom-light-cream mobile:font-fraunces mobile:text-2xl mobile:font-black mobile:transition-all mobile:duration-500 ${isHamburgerMenuOpen ? "mobile:h-screen" : "mobile:h-0"}`}
      >
        <ul
          className={`flex gap-7 duration-300 mobile:flex-col mobile:items-center mobile:pt-12 mobile:transition-opacity ${isHamburgerMenuOpen ? "opacity-100 duration-150" : "opacity-0"} ${showNavbar ? "block" : "hidden"}`}
        >
          <li>
            <NavLink
              className="active:text-pink-600"
              to="/"
              onClick={() => setIsHamburgerMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="active:text-pink-600"
              to="/about"
              onClick={() => setIsHamburgerMenuOpen(false)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="active:text-pink-600"
              to="/subscribe"
              onClick={() => setIsHamburgerMenuOpen(false)}
            >
              Create your plan
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
