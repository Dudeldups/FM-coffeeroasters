import heroImgHomeMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";
import heroImgHomeTablet from "../assets/home/tablet/image-hero-coffeepress.jpg";
import heroImgHomeDesktop from "../assets/home/desktop/image-hero-coffeepress.jpg";

import granEspressoImg from "../assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "../assets/home/desktop/image-planalto.png";
import piccolloImg from "../assets/home/desktop/image-piccollo.png";
import dancheImg from "../assets/home/desktop/image-danche.png";

import beanImg from "../assets/home/desktop/icon-coffee-bean.svg";
import giftImg from "../assets/home/desktop/icon-gift.svg";
import truckImg from "../assets/home/desktop/icon-truck.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.4,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <section className="max-w-7xl">
      <div className="relative flex max-h-[35rem] items-start justify-center overflow-hidden rounded-lg lg:max-h-full">
        <picture className="">
          <source
            srcSet={heroImgHomeDesktop}
            media="(min-width: 60em)"
            height={600}
            width={1280}
          />
          <source
            srcSet={heroImgHomeTablet}
            media="(min-width: 42.5em)"
            height={1000}
            width={1378}
          />
          <img
            className=""
            src={heroImgHomeMobile}
            loading="lazy"
            alt="An antique coffee press, a glass and coffee beans lying around it."
            height={1000}
            width={654}
          />
        </picture>
        <article className="flex-col-center absolute inset-0 mx-auto px-5 text-custom-light-cream after:absolute after:inset-0 after:bg-black after:bg-opacity-10 mobile:text-center md:ml-0 md:items-start md:px-[3.75rem] xl:px-20">
          <motion.h1
            className="z-10 max-w-[11ch] text-xl leading-none xs:text-2xl md:text-[3rem] lg:text-3xl"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true, amount: 1 }}
          >
            {"Great coffee made simple.".split(" ").map((word, index) => (
              <motion.span
                key={word + "-" + index}
                className="inline-block"
                variants={revealVariants}
              >
                {word.split("").map((letter, index) => (
                  <motion.span
                    key={letter + "-" + index}
                    className="inline-block"
                    variants={revealVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="z-10 mb-10 mt-6 max-w-80 opacity-80 md:max-w-[25rem] lg:mb-14 lg:mt-8"
          >
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </motion.p>
          <Link
            className={`z-10 rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-md font-black leading-6 text-custom-light-cream transition-colors hover:bg-custom-pale-orange hover:text-black focus-visible:bg-custom-pale-orange focus-visible:text-black disabled:bg-custom-dark-grey`}
            to="/subscribe"
          >
            Create your plan
          </Link>
        </article>
      </div>

      <div className="relative mt-32 md:mt-40 lg:mt-44">
        <motion.h2
          className="absolute -z-10 w-full bg-gradient-to-b from-custom-dark-grey bg-clip-text text-center text-[2.3rem] leading-none text-transparent xs:text-[2.8rem] sm:text-[3.8rem] md:text-[6rem] lg:text-[9rem] xl:text-[10.5rem]"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.25 }}
          viewport={{ once: true, amount: 1 }}
        >
          {"our collection".split("").map((letter, index) => (
            <motion.span key={letter + "-" + index} variants={revealVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <ul className="flex-col-center mx-auto gap-12 pt-24 md:pt-16 lg:pt-24 xl:max-w-[70rem] xl:flex-row xl:items-start xl:pt-28">
          <li className="flex-col-center gap-5 md:flex-row md:gap-9 xl:flex-col">
            <img
              className="max-w-[12rem] md:max-w-[14rem]"
              src={granEspressoImg}
              alt=""
              height={356}
              width={452}
              aria-hidden="true"
            />
            <div className="max-w-[18rem] text-center md:text-left xl:text-center">
              <h3>Gran Espresso</h3>
              <p className="mt-4 md:mt-6">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </li>

          <li className="flex-col-center gap-5 md:flex-row md:gap-9 xl:flex-col">
            <img
              className="max-w-[12rem] md:max-w-[14rem]"
              src={planaltoImg}
              alt=""
              height={356}
              width={452}
              aria-hidden="true"
            />
            <div className="max-w-[18rem] text-center md:text-left xl:text-center">
              <h3>Planalto</h3>
              <p className="mt-4 md:mt-6">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </li>

          <li className="flex-col-center gap-5 md:flex-row md:gap-9 xl:flex-col">
            <img
              className="max-w-[12rem] md:max-w-[14rem]"
              src={piccolloImg}
              alt=""
              height={356}
              width={452}
              aria-hidden="true"
            />
            <div className="max-w-[18rem] text-center md:text-left xl:text-center">
              <h3>Piccollo</h3>
              <p className="mt-4 md:mt-6">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry{" "}
              </p>
            </div>
          </li>

          <li className="flex-col-center gap-5 md:flex-row md:gap-9 xl:flex-col">
            <img
              className="max-w-[12rem] md:max-w-[14rem]"
              src={dancheImg}
              alt=""
              height={356}
              width={452}
              aria-hidden="true"
            />
            <div className="max-w-[18rem] text-center md:text-left xl:text-center">
              <h3>Danche</h3>
              <p className="mt-4 md:mt-6">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-28 grid text-custom-light-cream after:-z-10 after:col-[1_/_span_1] after:row-[1_/_span_2] after:rounded-lg after:bg-custom-dark-blue md:mt-36 xl:mt-48">
        <motion.div
          className="col-[1_/_span_1] row-[1_/_span_1] mx-auto max-w-[35rem] px-4 py-16 text-center xs:px-6 sm:px-8"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[1.75rem] leading-none md:text-2xl"
            variants={fadeInVariants}
          >
            Why choose us?
          </motion.h2>
          <motion.p
            className="col-[1_/_span_1] row-[2_/_span_1] mt-6 opacity-80"
            variants={fadeInVariants}
          >
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </motion.p>
        </motion.div>

        <motion.ul
          className="col-[1_/_span_1] row-[2_/_span_2] mx-auto grid justify-center gap-6 px-4 xs:px-6 sm:px-8 lg:grid-flow-col lg:px-4 xl:max-w-[72rem] xl:gap-8"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.li
            className="flex-col-center max-w-[20rem] gap-14 rounded-lg bg-custom-dark-cyan px-4 pb-12 pt-16 sm:px-10 md:max-w-[38rem] md:flex-row md:px-14 md:py-10 lg:flex-col lg:px-5 lg:pb-12 lg:pt-16 xl:px-12"
            variants={fadeInVariants}
          >
            <img
              src={beanImg}
              alt=""
              aria-hidden="true"
              height={72}
              width={73}
            />
            <div className="text-center md:text-left lg:text-center">
              <h3>Best quality</h3>
              <p className="mt-6">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex-col-center max-w-[20rem] gap-14 rounded-lg bg-custom-dark-cyan px-4 pb-12 pt-16 sm:px-10 md:max-w-[38rem] md:flex-row md:px-14 md:py-10 lg:flex-col lg:px-5 lg:pb-12 lg:pt-16 xl:px-12"
            variants={fadeInVariants}
          >
            <img
              src={giftImg}
              alt=""
              aria-hidden="true"
              height={72}
              width={72}
            />
            <div className="text-center md:text-left lg:text-center">
              <h3>Exclusive benefits</h3>
              <p className="mt-6">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex-col-center max-w-[20rem] gap-14 rounded-lg bg-custom-dark-cyan px-4 pb-12 pt-16 sm:px-10 md:max-w-[38rem] md:flex-row md:px-14 md:py-10 lg:flex-col lg:px-5 lg:pb-12 lg:pt-16 xl:px-12"
            variants={fadeInVariants}
          >
            <img
              src={truckImg}
              alt=""
              aria-hidden="true"
              height={50}
              width={72}
            />
            <div className="text-center md:text-left lg:text-center">
              <h3>Free shipping</h3>
              <p className="mt-6">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      <div className="flex-col-center mx-auto mt-28 max-w-[70rem] pb-28 lg:mt-48 lg:pb-48">
        <motion.h2
          className="text-custom-dark-grey md:self-start"
          initial={{ scaleY: 0.1, x: 1000 }}
          whileInView={{ scaleY: [0.1, 0.1, 1], x: [1000, 0, 0] }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            once: true,
            delay: 0.3,
            duration: 2,
            type: "spring",
            stiffness: 50,
            times: [0, 0.5, 1],
          }}
        >
          How it works
        </motion.h2>

        <ol className="flex-col-center gap-14 pt-20 text-center md:flex-row md:items-start md:gap-8 md:pt-28 md:text-left lg:gap-24 lg:pt-36">
          <li className="relative max-w-96 before:font-fraunces before:text-3xl before:font-black before:text-custom-pale-orange before:content-['0'_counter(list-item)] lg:pt-8">
            <h3 className="mt-6 h-14 md:h-24 md:max-w-[11ch] md:before:absolute md:before:inset-[-3.5rem_auto_auto_0] md:before:w-[calc(100%+2rem)] md:before:border md:before:border-custom-pale-orange md:after:absolute md:after:inset-[-3.5rem_auto_auto_0] md:after:aspect-square md:after:w-8 md:after:-translate-y-1/2 md:after:rounded-full md:after:border-2 md:after:border-custom-dark-cyan md:after:bg-custom-light-cream lg:before:w-[calc(100%+6rem)]">
              Pick your coffee
            </h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>

          <li className="relative max-w-96 before:font-fraunces before:text-3xl before:font-black before:text-custom-pale-orange before:content-['0'_counter(list-item)] lg:pt-8">
            <h3 className="mt-6 h-14 md:h-24 md:max-w-[11ch] md:before:absolute md:before:inset-[-3.5rem_auto_auto_0] md:before:w-[calc(100%+2rem)] md:before:border md:before:border-custom-pale-orange md:after:absolute md:after:inset-[-3.5rem_auto_auto_0] md:after:aspect-square md:after:w-8 md:after:-translate-y-1/2 md:after:rounded-full md:after:border-2 md:after:border-custom-dark-cyan md:after:bg-custom-light-cream lg:before:w-[calc(100%+6rem)]">
              Choose the frequency
            </h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>

          <li className="relative max-w-96 before:font-fraunces before:text-3xl before:font-black before:text-custom-pale-orange before:content-['0'_counter(list-item)] lg:pt-8">
            <h3 className="mt-6 h-14 md:h-24 md:max-w-[11ch] md:after:absolute md:after:inset-[-3.5rem_auto_auto_0] md:after:aspect-square md:after:w-8 md:after:-translate-y-1/2 md:after:rounded-full md:after:border-2 md:after:border-custom-dark-cyan md:after:bg-custom-light-cream">
              Receive and enjoy!
            </h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ol>

        <motion.span
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            once: true,
            delay: 0.2,
            duration: 1,
            type: "spring",
          }}
          className="mt-20 block md:self-start"
        >
          <Link
            className={`rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-md font-black leading-6 text-custom-light-cream transition-colors hover:bg-custom-pale-orange hover:text-black focus-visible:bg-custom-pale-orange focus-visible:text-black disabled:bg-custom-dark-grey`}
            to="/subscribe"
          >
            Create your plan
          </Link>
        </motion.span>
      </div>
    </section>
  );
};

export default Home;
