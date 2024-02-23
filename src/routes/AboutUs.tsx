import heroImgAboutMobile from "../assets/about/mobile/image-hero-whitecup.jpg";
import heroImgAboutTablet from "../assets/about/tablet/image-hero-whitecup.jpg";
import heroImgAboutDesktop from "../assets/about/desktop/image-hero-whitecup.jpg";
import commitmentImgMobile from "../assets/about/mobile/image-commitment.jpg";
import commitmentImgTablet from "../assets/about/tablet/image-commitment.jpg";
import commitmentImgDesktop from "../assets/about/desktop/image-commitment.jpg";
import qualityImgMobile from "../assets/about/mobile/image-quality.jpg";
import qualityImgTablet from "../assets/about/tablet/image-quality.jpg";
import qualityImgDesktop from "../assets/about/desktop/image-quality.jpg";
import ukImg from "../assets/about/desktop/illustration-uk.svg";
import canadaImg from "../assets/about/desktop/illustration-canada.svg";
import australiaImg from "../assets/about/desktop/illustration-australia.svg";

const AboutUs = () => {
  return (
    <section className="max-w-7xl">
      <div>
        <picture>
          <source srcSet={heroImgAboutDesktop} media="(min-width: 60em)" />
          <source srcSet={heroImgAboutTablet} media="(min-width: 42.5em)" />
          <img
            src={heroImgAboutMobile}
            alt="A neatly decorated coffe viewed from above"
          />
        </picture>

        <article>
          <h1>About us</h1>
          <p>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </article>
      </div>

      <div>
        <picture>
          <source srcSet={commitmentImgDesktop} media="(min-width: 60em)" />
          <source srcSet={commitmentImgTablet} media="(min-width: 42.5em)" />
          <img
            src={commitmentImgMobile}
            alt="A barrista decorates the top of a latte with a pattern."
          />
        </picture>
        <h2>Our commitment</h2>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>

      <div>
        <picture>
          <source srcSet={qualityImgDesktop} media="(min-width: 64rem)" />
          <source srcSet={qualityImgTablet} media="(min-width: 48rem)" />
          <img src={qualityImgMobile} alt="" />
        </picture>
        <div>
          <h2>Uncompromising quality</h2>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>

      <div>
        <h2>Our headquarters</h2>
        <ul>
          <li>
            <img src={ukImg} alt="" aria-hidden="true" />
            <address>
              <span className="block font-bold">United Kingdom</span>
              <span className="block">68 Asfordby Rd</span>
              <span className="block">Alcaston</span>
              <span className="block">SY6 1YA</span>
              <span className="block">+44 1241 918425</span>
            </address>
          </li>

          <li>
            <img src={canadaImg} alt="" aria-hidden="true" />
            <address>
              <span className="block font-bold">Canada</span>
              <span className="block">1528 Eglinton Avenue</span>
              <span className="block">Toronto</span>
              <span className="block">Ontario M4P 1A6</span>
              <span className="block">+1 416 485 2997</span>
            </address>
          </li>

          <li>
            <img src={australiaImg} alt="" aria-hidden="true" />
            <address>
              <span className="block font-bold">Australia</span>
              <span className="block">36 Swanston Street</span>
              <span className="block">Kewell</span>
              <span className="block">Victoria</span>
              <span className="block">+61 4 9928 3629</span>
            </address>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AboutUs;
