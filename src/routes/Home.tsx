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
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="max-w-7xl">
      <div className="relative mx-auto max-w-[25rem] overflow-hidden rounded-lg md:max-w-[45rem] lg:max-w-full">
        <picture className="">
          <source srcSet={heroImgHomeDesktop} media="(min-width: 60em)" />
          <source srcSet={heroImgHomeTablet} media="(min-width: 42.5em)" />
          <img
            className=""
            src={heroImgHomeMobile}
            alt="An antique coffee press, a glass and coffee beans lying around it."
          />
        </picture>
        <article className="flex-col-center absolute inset-0 mx-auto h-full w-full  px-5 text-custom-light-cream md:ml-0 md:items-start md:px-[3.75rem] mobile:text-center">
          <h1 className="max-w-[11ch] text-[2rem] leading-none md:text-[3rem] lg:text-[4.5rem] xs:text-[2.5rem]">
            Great coffee made simple.
          </h1>
          <p className="mb-10 mt-6 max-w-80 text-[.9375rem] leading-6 opacity-80 md:max-w-[25rem] lg:mb-14 lg:mt-8">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/subscribe">
            <Btn>Create your plan</Btn>
          </Link>
        </article>
      </div>

      <div className="">
        <h2>our collection</h2>

        <ul>
          <li>
            <img src={granEspressoImg} alt="" aria-hidden="true" />
            <div>
              <h3 className="font-bold">Gran Espresso</h3>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </li>

          <li>
            <img src={planaltoImg} alt="" aria-hidden="true" />
            <div>
              <h3 className="font-bold">Planalto</h3>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </li>

          <li>
            <img src={piccolloImg} alt="" aria-hidden="true" />
            <div>
              <h3 className="font-bold">Piccollo</h3>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry{" "}
              </p>
            </div>
          </li>

          <li>
            <img src={dancheImg} alt="" aria-hidden="true" />
            <div>
              <h3 className="font-bold">Danche</h3>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <div>
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <ul>
          <li>
            <img src={beanImg} alt="" aria-hidden="true" />
            <div>
              <h3>Best quality</h3>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </li>

          <li>
            <img src={giftImg} alt="" aria-hidden="true" />
            <div>
              <h3>Exclusive benefits</h3>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </li>

          <li>
            <img src={truckImg} alt="" aria-hidden="true" />
            <div>
              <h3>Free shipping</h3>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2>How it works</h2>

        <ol>
          <li>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>

          <li>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>

          <li>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ol>

        <Link to="/subscribe">
          <Btn>Create your plan</Btn>
        </Link>
      </div>
    </section>
  );
};

export default Home;
