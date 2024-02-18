import heroImgHomeMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";

const Home = () => {
  return (
    <section>
      <div>
        <picture>
          <img src={heroImgHomeMobile} alt="" />
        </picture>
        <article>
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button>Create your plan</button>
        </article>
      </div>

      <div>
        <h2>our collection</h2>

        <ul>
          <li>
            <h3>Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </li>

          <li>
            <h3>Planalto</h3>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </li>

          <li>
            <h3>Piccollo</h3>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry{" "}
            </p>
          </li>

          <li>
            <h3>Danche</h3>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <ul>
          <li>
            <h3>Best quality</h3>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </li>

          <li>
            <h3>Exclusive benefits</h3>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </li>

          <li>
            <h3>Free shipping</h3>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
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

        <button>Create your plan</button>
      </div>
    </section>
  );
};

export default Home;
