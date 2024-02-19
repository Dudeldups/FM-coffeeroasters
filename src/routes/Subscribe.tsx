import { SubmitHandler, useForm, FieldValues } from "react-hook-form";

import heroImgSubscribeMobile from "../assets/plan/mobile/image-hero-blackcup.jpg";
import heroImgSubscribeTablet from "../assets/plan/tablet/image-hero-blackcup.jpg";
import heroImgSubscribeDesktop from "../assets/plan/desktop/image-hero-blackcup.jpg";

import subsciptionData from "../data/subscriptions.json";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const isCapsuleSelected = watch("how") === "Capsule";

  return (
    <section>
      <div>
        <picture>
          <source srcSet={heroImgSubscribeDesktop} media="(min-width: 64rem)" />
          <source srcSet={heroImgSubscribeTablet} media="(min-width: 48rem)" />
          <img src={heroImgSubscribeMobile} alt="" />
        </picture>
        <article>
          <h1>Create plan</h1>
          <p>
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </article>
      </div>

      <div>
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

      <form onSubmit={handleSubmit(onSubmit)}>
        {subsciptionData.map((formStep) => (
          <fieldset key={formStep.id} className="my-5">
            <legend>{formStep.question}</legend>
            {formStep.options.map(({ name, description }) => {
              const optionName = name.split(" ").join("");
              return (
                <div key={optionName}>
                  <input
                    {...register(formStep.name)}
                    type="radio"
                    id={formStep.id + "-" + optionName}
                    value={name}
                  />
                  <label htmlFor={formStep.id + "-" + optionName}>
                    <span className="block font-bold">{name}</span>{" "}
                    {description}
                  </label>
                </div>
              );
            })}
          </fieldset>
        ))}

        <fieldset>
          <legend>How do you drink your coffee?</legend>
          <div>
            <label htmlFor="capsule">
              <span>Capsule</span> Compatible with Nespresso systems and similar
              brewers
            </label>
            <input
              {...register("how")}
              type="radio"
              id="capsule"
              value="Capsule"
            />
          </div>
          <div>
            <label htmlFor="filter">
              <span>Filter</span> For pour over or drip methods like Aeropress,
              Chemex, and V60
            </label>
            <input
              {...register("how")}
              type="radio"
              id="filter"
              value="Filter"
            />
          </div>
          <div>
            <label htmlFor="espresso">
              Dense and finely ground beans for an intense, flavorful experience
              <span>Espresso</span>
            </label>
            <input
              {...register("how")}
              type="radio"
              id="espresso"
              value="Espresso"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>What type of coffee?</legend>
          <div>
            <label htmlFor="singleOrigin">Single Origin</label>
            <input
              {...register("type")}
              type="radio"
              id="singleOrigin"
              value="Single Origin"
            />
          </div>
          <div>
            <label htmlFor="decaf">Decaf</label>
            <input
              {...register("type")}
              type="radio"
              id="decaf"
              value="Decaf"
            />
          </div>
          <div>
            <label htmlFor="blended">Blended</label>
            <input
              {...register("type")}
              type="radio"
              id="blended"
              value="Blended"
            />
          </div>
        </fieldset>

        <div>
          <h2>Order summary</h2>
          <p>
            "I drink my coffee{" "}
            {isCapsuleSelected
              ? "using Capsules"
              : `as ${watch("Preferences") || "as _____"}`}
            , with a {watch("Bean Type") || "_____"} type of bean.{" "}
            {watch("Quantity")}
            {watch("Preferences") !== "Capsule"
              ? watch("Grind Option")
                ? ` ground ala ${watch("Grind Option")}`
                : " ground ala _____"
              : ""}
            , sent to me {watch("Deliveries") || "_____"}."
          </p>
        </div>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Create my plan!"}
        </button>
      </form>
    </section>
  );
};
export default Subscribe;
