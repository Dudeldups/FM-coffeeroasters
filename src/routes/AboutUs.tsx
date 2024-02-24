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
    <section className="flex-col-center max-w-7xl">
      <div className="relative max-w-[25rem] overflow-hidden rounded-lg md:max-w-[45rem] lg:max-w-full">
        <picture>
          <source srcSet={heroImgAboutDesktop} media="(min-width: 60em)" />
          <source srcSet={heroImgAboutTablet} media="(min-width: 42.5em)" />
          <img
            src={heroImgAboutMobile}
            alt="A neatly decorated cup of coffe viewed from above"
          />
        </picture>

        <article className="flex-col-center absolute inset-0 mx-auto px-5 text-custom-light-cream after:absolute after:inset-0 after:bg-black after:bg-opacity-30 mobile:text-center md:ml-0 md:items-start md:px-[3.75rem] xl:px-[5rem]">
          <h1 className="z-10 text-[1.75rem] leading-none md:text-xl lg:text-2xl">
            About Us
          </h1>
          <p className="z-10 mt-6 max-w-80 md:max-w-[25rem]">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </article>
      </div>

      <div className="flex-col-center mt-28 gap-12 text-center mobile:max-w-[25rem] md:mt-36 md:grid md:max-w-[45rem] md:grid-flow-col md:grid-cols-[40%_50%] md:justify-between md:gap-0 md:text-left lg:mt-40 lg:max-w-[70rem] lg:gap-20">
        <picture>
          <source srcSet={commitmentImgDesktop} media="(min-width: 60em)" />
          <source srcSet={commitmentImgTablet} media="(min-width: 42.5em)" />
          <img
            className="rounded-lg md:mr-[1.5rem]"
            src={commitmentImgMobile}
            alt="A barrista decorating the top of a coffee with a pattern."
          />
        </picture>
        <div>
          <h2 className="text-lg xs:text-xl lg:text-2xl">Our commitment</h2>
          <p className="mt-8">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>

      <div className="max-w-[70rem]">
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
