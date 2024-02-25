import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import coffeeroastersLogo from "../assets/shared/desktop/logo.svg";

//TODO: Add hover and focus states to the links

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setShowNavbar(true), 300);
    } else {
      document.body.style.removeProperty("overflow");
      setTimeout(() => setShowNavbar(false), 400);
    }
  }, [isHamburgerMenuOpen]);

  return (
    <header className="z-50 w-full px-4 xs:px-6 md:px-10">
      <div className="relative mx-auto flex max-w-7xl py-8 lg:py-11">
        <Link to="/" className="mr-auto self-center">
          <img
            className="max-w-40 md:max-w-60"
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
          className={`navbar via-45% mobile:absolute mobile:w-screen  mobile:-translate-x-4 mobile:translate-y-[4rem] mobile:bg-gradient-to-b mobile:from-custom-light-cream mobile:via-custom-light-cream mobile:font-fraunces mobile:text-lg mobile:font-black mobile:transition-all mobile:duration-500 xs:mobile:-translate-x-6 ${isHamburgerMenuOpen ? "mobile:h-screen" : "mobile:h-0"}`}
        >
          <ul
            className={`flex gap-7 duration-300 mobile:flex-col mobile:items-center mobile:pt-12 mobile:transition-opacity md:gap-8 ${isHamburgerMenuOpen ? "duration-150 mobile:opacity-100" : "mobile:opacity-0"} ${showNavbar ? "" : "mobile:hidden"}`}
          >
            <li>
              <NavLink
                className="md:text-[.875rem] md:font-bold md:uppercase md:tracking-[0.06rem] md:text-custom-dark-grey"
                to="/"
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="md:text-[.875rem] md:font-bold md:uppercase md:tracking-[0.06rem] md:text-custom-dark-grey"
                to="/about"
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="md:text-[.875rem] md:font-bold md:uppercase md:tracking-[0.06rem] md:text-custom-dark-grey"
                to="/subscribe"
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                Create your plan
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
