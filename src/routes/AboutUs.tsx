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

      <div className="mt-28 grid w-[min(100%,_70rem)] rounded-lg text-custom-light-cream after:-z-10 after:col-[1_/_span_1] after:row-[2_/_span_2] after:rounded-lg after:bg-custom-dark-blue md:mt-36 lg:mt-40 lg:max-w-[70rem] lg:grid-cols-[15fr_12fr] lg:grid-rows-[clamp(1.5rem,_-10.5rem_+_20vw,_5.5rem)_1fr_clamp(1.5rem,_-10.5rem_+_20vw,_5.5rem)] lg:gap-x-[clamp(3rem,_-23.5rem_+_44.44vw,_8rem)] lg:after:col-[1_/_span_2] lg:after:row-[2_/_span_2] lg:after:-mx-20">
        <picture className="col-[1_/_span_1] row-[1_/_span_2] px-6 sm:px-14 lg:col-[2_/_span_1] lg:row-[1_/_span_2] lg:px-0">
          <source srcSet={qualityImgDesktop} media="(min-width: 60em)" />
          <source srcSet={qualityImgTablet} media="(min-width: 48em)" />
          <img className="mx-auto rounded-lg" src={qualityImgMobile} alt="" />
        </picture>
        <div className="col-[1_/_span_1] row-[3_/_span_1] mx-auto px-6 text-center sm:px-14 lg:col-[1_/_span_1] lg:row-[2_/_span_1] lg:px-0 lg:text-left">
          <h2 className="mt-16 text-lg leading-none xs:text-[1.75rem] md:text-xl xl:mt-24 xl:text-2xl">
            Uncompromising quality
          </h2>
          <p className="mb-14 mt-6 max-w-[66ch] opacity-80">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>

      <div className="my-28 w-full md:my-36 lg:my-40 lg:max-w-[70rem]">
        <h2 className="text-custom-dark-grey mobile:text-center">
          Our headquarters
        </h2>
        <ul className="mt-16 grid gap-20 md:flex md:justify-between md:gap-8 lg:justify-start">
          <li className="flex-1">
            <img
              className="mobile:mx-auto"
              src={ukImg}
              alt=""
              aria-hidden="true"
            />
            <address className="grid text-sm not-italic mobile:text-center">
              <h3 className="mb-6 mt-11 mobile:text-[1.75rem]/[2.25rem] lg:text-xl">
                United Kingdom
              </h3>

              <span>
                <span className="sr-only">street: </span>
                68 Asfordby Rd
              </span>
              <span>
                <span className="sr-only">city: </span>
                Alcaston
              </span>
              <span>
                <span className="sr-only">state: </span>
                SY6 1YA
              </span>
              <span>
                <span className="sr-only">phone: </span>
                +44 1241 918425
              </span>
            </address>
          </li>

          <li className="flex-1">
            <img
              className="mobile:mx-auto"
              src={canadaImg}
              alt=""
              aria-hidden="true"
            />
            <address className="grid text-sm not-italic mobile:text-center">
              <h3 className="mb-6 mt-11 mobile:text-[1.75rem]/[2.25rem] lg:text-xl">
                Canada
              </h3>
              <span>
                <span className="sr-only">street: </span>
                1528 Eglinton Avenue
              </span>
              <span>
                <span className="sr-only">city: </span>
                Toronto
              </span>
              <span>
                <span className="sr-only">state: </span>
                Ontario M4P 1A6
              </span>
              <span>
                <span className="sr-only">phone: </span>
                +1 416 485 2997
              </span>
            </address>
          </li>

          <li className="flex-1">
            <img
              className="mobile:mx-auto"
              src={australiaImg}
              alt=""
              aria-hidden="true"
            />
            <address className="grid text-sm not-italic mobile:text-center">
              <h3 className="mb-6 mt-11 mobile:text-[1.75rem]/[2.25rem] lg:text-xl">
                Australia
              </h3>
              <span>
                <span className="sr-only">street: </span>
                36 Swanston Street
              </span>
              <span>
                <span className="sr-only">city: </span>
                Kewell
              </span>
              <span>
                <span className="sr-only">state: </span>
                Victoria
              </span>
              <span>
                <span className="sr-only">phone: </span>
                +61 4 9928 3629
              </span>
            </address>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AboutUs;
