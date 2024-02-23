import { useState } from "react";
import SubscribeForm from "../components/SubscribeForm";
import Modal from "../components/Modal";
import heroImgSubscribeMobile from "../assets/plan/mobile/image-hero-blackcup.jpg";
import heroImgSubscribeTablet from "../assets/plan/tablet/image-hero-blackcup.jpg";
import heroImgSubscribeDesktop from "../assets/plan/desktop/image-hero-blackcup.jpg";

const Subscribe = () => {
  const [summaryString, setSummaryString] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className="max-w-7xl">
      <div>
        <picture>
          <source srcSet={heroImgSubscribeDesktop} media="(min-width: 60em)" />
          <source srcSet={heroImgSubscribeTablet} media="(min-width: 42.5em)" />
          <img src={heroImgSubscribeMobile} alt="" />
        </picture>

        <article>
          <h1 className="">Create a plan</h1>
          <p>
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </article>
      </div>

      <div className="relative">
        <div className="absolute -z-10 h-full w-screen -translate-x-6 bg-custom-light-grey md:-translate-x-10"></div>
        <ol>
          <li>
            <h2>Pick your coffee</h2>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>
          <li>
            <h2>Choose the frequency</h2>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>
          <li>
            <h2>Receive and enjoy!</h2>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ol>
      </div>

      <SubscribeForm
        summaryString={summaryString}
        setSummaryString={setSummaryString}
        setIsModalOpen={setIsModalOpen}
      />

      <Modal
        summaryString={summaryString}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};
export default Subscribe;
