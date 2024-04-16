import { Link } from "react-router-dom";
import coffeeroastersLogoWhite from "../assets/shared/desktop/logo-white.svg";
import Facebook from "./logos/Facebook";
import Instagram from "./logos/Instagram";
import Twitter from "./logos/Twitter";
import { motion } from "framer-motion";

const colorVariants = {
  hidden: { color: "#FEFCF7" },
  visible: {
    color: ["#FEFCF7", "#FDD6BA", "#FDD6BA", "#FEFCF7"],
    transition: {
      duration: 3.5,
      ease: "easeInOut",
      staggerChildren: 3.5,
    },
  },
};

const Footer = () => {
  return (
    <footer className="w-full px-4 pb-10 xs:px-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center bg-custom-dark-blue px-5 py-12 lg:flex-row lg:gap-14 lg:px-12 xl:gap-24 xl:px-20">
        <img
          className="w-52 sm:w-60"
          src={coffeeroastersLogoWhite}
          height={27}
          width={237}
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

        <motion.ul
          variants={colorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="mt-10 flex items-center justify-center gap-6 text-custom-light-cream md:mt-14 lg:ml-auto lg:mt-0"
        >
          <motion.li variants={colorVariants}>
            <a
              className="transition-colors hover:text-custom-pale-orange focus-visible:text-custom-pale-orange"
              href="/"
              aria-label="facebook"
            >
              <Facebook />
            </a>
          </motion.li>
          <motion.li variants={colorVariants}>
            <a
              className="transition-colors hover:text-custom-pale-orange focus-visible:text-custom-pale-orange"
              href="/"
              aria-label="twitter"
            >
              <Twitter />
            </a>
          </motion.li>
          <motion.li variants={colorVariants}>
            <a
              className="transition-colors hover:text-custom-pale-orange focus-visible:text-custom-pale-orange"
              href="/"
              aria-label="instagram"
            >
              <Instagram />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
};
export default Footer;
