import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import coffeeroastersLogo from "../assets/shared/desktop/logo.svg";

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <header className="flex">
      <Link to="/" className="mr-auto">
        <img src={coffeeroastersLogo} alt="Coffeeroasters logo" />
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
          className={`relative h-1 w-full bg-black transition-colors duration-300 ease-in-out before:absolute before:inset-0 before:h-1 before:bg-black before:transition-[transform] before:duration-300 before:ease-in-out after:absolute after:inset-0 after:h-1 after:bg-black after:transition-[transform] after:duration-300 after:ease-in-out ${isHamburgerMenuOpen ? "bg-transparent before:-rotate-45 before:delay-300 after:rotate-45 after:delay-300" : "delay-200 before:-translate-y-2 after:translate-y-2"}`}
        ></span>
      </button>

      <nav id="nav-list" className="hidden md:block">
        <ul className="flex gap-7">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/subscribe">Create your plan</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
