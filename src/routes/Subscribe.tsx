import { useEffect, useState } from "react";
import SubscribeForm from "../components/SubscribeForm";
import heroImgSubscribeMobile from "../assets/plan/mobile/image-hero-blackcup.jpg";
import heroImgSubscribeTablet from "../assets/plan/tablet/image-hero-blackcup.jpg";
import heroImgSubscribeDesktop from "../assets/plan/desktop/image-hero-blackcup.jpg";

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  useEffect(() => {
    // if (isModalOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  }, [isModalOpen]);

  return (
    <section className="flex-col-center max-w-7xl">
      <div className="flex-center relative max-h-[27rem] overflow-hidden rounded-lg lg:max-h-full">
        <picture>
          <source srcSet={heroImgSubscribeDesktop} media="(min-width: 60em)" />
          <source srcSet={heroImgSubscribeTablet} media="(min-width: 42.5em)" />
          <img
            src={heroImgSubscribeMobile}
            alt="A coffee cup with a decorated cream flower."
          />
        </picture>

        <article className="flex-col-center absolute inset-0 mx-auto px-5 text-custom-light-cream after:absolute after:inset-0 after:bg-black after:bg-opacity-30 mobile:text-center md:ml-0 md:items-start md:px-[3.75rem] xl:px-20">
          <h1 className="z-10 text-xl leading-none xs:text-2xl md:text-[3rem] lg:text-3xl">
            Create a plan
          </h1>
          <p className="z-10 mt-6 max-w-80 md:max-w-[25rem] lg:mt-10">
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </article>
      </div>

      <div className="mt-28 w-[calc(100%+25rem)] rounded-lg bg-custom-dark-blue py-20 md:mt-36 md:pt-24 lg:mt-40 lg:w-auto lg:pt-28">
        <ol className="mx-auto flex max-w-[100vw] flex-col gap-14 px-4 text-custom-light-cream xs:px-6 md:flex-row md:gap-4 md:px-10 lg:gap-10 lg:px-14 xl:gap-20 xl:px-20">
          <li className="relative flex-1 mobile:text-center md:before:absolute md:before:inset-[-1rem_auto_auto_0] md:before:w-[calc(200%+2rem)] md:before:translate-x-4 md:before:border md:before:border-custom-pale-orange md:after:absolute md:after:inset-[-1rem_auto_auto_0] md:after:aspect-square md:after:w-8 md:after:-translate-y-1/2 md:after:rounded-full md:after:border-2 md:after:border-custom-dark-cyan md:after:bg-transparent lg:before:w-[calc(200%+5rem)] xl:before:w-[calc(200%+10rem)]">
            <h2 className="before:mb-6 before:block before:font-fraunces before:text-3xl before:font-black before:text-custom-pale-orange before:content-['0'_counter(list-item)] xs:text-[1.75rem] md:max-w-[11ch] md:before:mb-10 md:before:mt-14 lg:text-xl">
              Pick your coffee
            </h2>
            <p className="mt-6 mobile:mx-auto mobile:max-w-[38ch] md:mt-10">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>
          <li className="relative flex-1 mobile:text-center md:after:absolute md:after:inset-[-1rem_auto_auto_0] md:after:aspect-square md:after:w-8 md:after:-translate-y-1/2 md:after:rounded-full md:after:border-2 md:after:border-custom-dark-cyan md:after:bg-transparent">
            <h2 className="before:mb-6 before:block before:font-fraunces before:text-3xl before:font-black before:text-custom-pale-orange before:content-['0'_counter(list-item)] xs:text-[1.75rem] md:max-w-[11ch] md:before:mb-10 md:before:mt-14 lg:text-xl">
              Choose the frequency
            </h2>
            <p className="mt-6 mobile:mx-auto mobile:max-w-[38ch] md:mt-10">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>
          <li className="relative flex-1 mobile:text-center md:after:absolute md:after:inset-[-1rem_auto_auto_0] md:after:aspect-square md:after:w-8 md:after:-translate-y-1/2 md:after:rounded-full md:after:border-2 md:after:border-custom-dark-cyan md:after:bg-transparent">
            <h2 className="before:mb-6 before:block before:font-fraunces before:text-3xl before:font-black before:text-custom-pale-orange before:content-['0'_counter(list-item)] xs:text-[1.75rem] md:max-w-[11ch] md:before:mb-10 md:before:mt-14 lg:text-xl">
              Receive and enjoy!
            </h2>
            <p className="mt-6 mobile:mx-auto mobile:max-w-[38ch] md:mt-10">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ol>
      </div>

      <SubscribeForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};
export default Subscribe;
