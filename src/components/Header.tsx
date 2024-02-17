import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <header>
      <Link to="/">Image</Link>

      <button
        className="inline-flex aspect-square w-10 items-center p-1 md:hidden"
        aria-controls="nav-list"
        aria-expanded={isHamburgerMenuOpen}
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">
          {isHamburgerMenuOpen ? "Show" : "Hide"} navigation list
        </span>
        <span
          className={`relative h-1 w-full bg-black before:absolute before:inset-0 before:h-1 before:-translate-y-2 before:bg-black before:content-[''] after:absolute after:inset-0 after:h-1 after:translate-y-2 after:bg-black after:content-['']`}
        ></span>
      </button>

      <nav id="nav-list">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
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
