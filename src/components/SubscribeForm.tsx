import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Prices {
  [key: string]: {
    everyWeek: number;
    everyTwoWeeks: number;
    everyMonth: number;
  };
}

const SubscribeForm = () => {
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

  const prices: Prices = {
    "250g": {
      everyWeek: 7.2,
      everyTwoWeeks: 9.6,
      everyMonth: 12.0,
    },
    "500g": {
      everyWeek: 13.0,
      everyTwoWeeks: 17.5,
      everyMonth: 22.0,
    },
    "1000g": {
      everyWeek: 22.0,
      everyTwoWeeks: 32.0,
      everyMonth: 42.0,
    },
  };

  const isCapsuleSelected = watch("how") === "Capsule";
  const quantity = watch("quantity") as keyof Prices;

  const className = {
    fieldset: "my-6",
    input: "sr-only peer",
    label: "block peer-checked:bg-slate-300",
    "label-span": "block font-bold",
    "inside-div": ``,
  };

  console.log(watch("preferences"));
  console.log(watch("beanType"));
  console.log(watch("quantity"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={className.fieldset}>
        <legend className="peer">How do you drink your coffee?</legend>

        <div className={className["inside-div"]}>
          <input
            className={className.input}
            {...register("preferences", { required: true })}
            type="radio"
            id="preferences-capsule"
            value="Capsule"
          />
          <label className={className.label} htmlFor="preferences-capsule">
            <span className={className["label-span"]}>Capsule</span> Compatible
            with Nespresso systems and similar brewers
          </label>
        </div>

        <div className={className["inside-div"]}>
          <input
            className={className.input}
            {...register("preferences", { required: true })}
            type="radio"
            id="preferences-filter"
            value="Filter"
          />
          <label className={className.label} htmlFor="preferences-filter">
            <span className={className["label-span"]}>Filter</span> For pour
            over or drip methods like Aeropress, Chemex, and V60
          </label>
        </div>

        <div className={className["inside-div"]}>
          <input
            className={className.input}
            {...register("preferences", { required: true })}
            type="radio"
            id="preferences-espresso"
            value="Espresso"
          />
          <label className={className.label} htmlFor="preferences-espresso">
            <span className={className["label-span"]}>Espresso</span> Dense and
            finely ground beans for an intense, flavorful experience
          </label>
        </div>
      </fieldset>

      <fieldset
        className={className.fieldset}
        aria-expanded={watch("preferences") !== undefined}
        aria-live="polite"
      >
        <legend>What type of coffee?</legend>
        {watch("preferences") && (
          <div>
            <div className={className["inside-div"]}>
              <input
                className={className.input}
                {...register("beanType", { required: true })}
                type="radio"
                id="beanType-singleOrigin"
                value="Single Origin"
              />
              <label
                className={className.label}
                htmlFor="beanType-singleOrigin"
              >
                <span className={className["label-span"]}>Single Origin</span>{" "}
                Distinct, high quality coffee from a specific family-owned farm
              </label>
            </div>

            <div className={className["inside-div"]}>
              <input
                className={className.input}
                {...register("beanType", { required: true })}
                type="radio"
                id="beanType-decaf"
                value="Decaf"
              />
              <label className={className.label} htmlFor="beanType-decaf">
                <span className={className["label-span"]}>Decaf</span> Just like
                regular coffee, except the caffeine has been removed
              </label>
            </div>

            <div className={className["inside-div"]}>
              <input
                className={className.input}
                {...register("beanType", { required: true })}
                type="radio"
                id="beanType-blended"
                value="Blended"
              />
              <label className={className.label} htmlFor="beanType-blended">
                <span className={className["label-span"]}>Blended</span>{" "}
                Combination of two or three dark roasted beans of organic
                coffees
              </label>
            </div>
          </div>
        )}
      </fieldset>

      <fieldset
        className={className.fieldset}
        aria-expanded={watch("preferences") !== undefined}
        aria-live="polite"
      >
        <legend>How much would you like?</legend>
        {watch("beanType") && (
          <div>
            <div>
              <input
                className={className.input}
                {...register("quantity", { required: true })}
                type="radio"
                id="quantity-250g"
                value="250g"
              />
              <label className={className.label} htmlFor="quantity-250g">
                <span className={className["label-span"]}>250g</span> Perfect
                for the solo drinker. Yields about 12 delicious cups.
              </label>
            </div>

            <div>
              <input
                className={className.input}
                {...register("quantity", { required: true })}
                type="radio"
                id="quantity-500g"
                value="500g"
              />
              <label className={className.label} htmlFor="quantity-500g">
                <span className={className["label-span"]}>500g</span> Perfect
                option for a couple. Yields about 40 delectable cups.
              </label>
            </div>

            <div>
              <input
                className={className.input}
                {...register("quantity", { required: true })}
                type="radio"
                id="quantity-1000g"
                value="1000g"
              />
              <label className={className.label} htmlFor="quantity-1000g">
                <span className={className["label-span"]}>1000g</span> Perfect
                for offices and events. Yields about 90 delightful cups.
              </label>
            </div>
          </div>
        )}
      </fieldset>

      <fieldset
        className={className.fieldset}
        aria-expanded={watch("preferences") !== undefined}
        aria-live="polite"
      >
        <legend>Want us to grind them?</legend>
        {watch("quantity") && !isCapsuleSelected && (
          <div>
            <div>
              <input
                className={className.input}
                {...register("grindOption")}
                type="radio"
                id="grindOption-wholebean"
                value="Wholebean"
              />
              <label
                className={className.label}
                htmlFor="grindOption-wholebean"
              >
                <span className={className["label-span"]}>Wholebean</span> Best
                choice if you cherish the full sensory experience
              </label>
            </div>

            <div>
              <input
                className={className.input}
                {...register("grindOption")}
                type="radio"
                id="grindOption-filter"
                value="Filter"
              />
              <label className={className.label} htmlFor="grindOption-filter">
                <span className={className["label-span"]}>Filter</span> For drip
                or pour-over coffee methods such as V60 or Aeropress
              </label>
            </div>

            <div>
              <input
                className={className.input}
                {...register("grindOption")}
                type="radio"
                id="grindOption-cafetiere"
                value="Cafetiére"
              />
              <label
                className={className.label}
                htmlFor="grindOption-cafetiere"
              >
                <span className={className["label-span"]}>Cafetiére</span>{" "}
                Course ground beans specially suited for french press coffee
              </label>
            </div>
          </div>
        )}
      </fieldset>

      <fieldset
        className={className.fieldset}
        aria-expanded={watch("preferences") !== undefined}
        aria-live="polite"
      >
        <legend>How often should we deliver?</legend>
        {watch("grindOption") && (
          <div>
            <div>
              <input
                className={className.input}
                {...register("deliveries", { required: true })}
                type="radio"
                id="deliveries-everyWeek"
                value="Every week"
              />
              <label className={className.label} htmlFor="deliveries-everyWeek">
                <span className={className["label-span"]}>Every week</span> $
                {prices[quantity].everyWeek} per shipment. Includes free
                first-class shipping.
              </label>
            </div>

            <div>
              <input
                className={className.input}
                {...register("deliveries", { required: true })}
                type="radio"
                id="deliveries-everyTwoWeeks"
                value="Every two weeks"
              />
              <label
                className={className.label}
                htmlFor="deliveries-everyTwoWeeks"
              >
                <span className={className["label-span"]}>Every two weeks</span>{" "}
                ${prices[quantity].everyTwoWeeks} per shipment. Includes free
                priority shipping.
              </label>
            </div>

            <div>
              <input
                className={className.input}
                {...register("deliveries", { required: true })}
                type="radio"
                id="deliveries-everyMonth"
                value="Every month"
              />
              <label
                className={className.label}
                htmlFor="deliveries-everyMonth"
              >
                <span className={className["label-span"]}>Every month</span> $
                {prices[quantity].everyMonth} per shipment. Includes free
                priority shipping.
              </label>
            </div>
          </div>
        )}
      </fieldset>

      <div className="mt-4">
        <h2>Order summary</h2>
        <p>
          "I drink my coffee{" "}
          {isCapsuleSelected
            ? "using Capsules"
            : `as ${watch("preferences") || "_____"}`}
          , with a {watch("beanType") || "_____"} type of bean.{" "}
          {watch("quantity")}
          {watch("preferences") !== "Capsule"
            ? watch("grindOption")
              ? ` ground ala ${watch("grindOption")}`
              : " ground ala _____"
            : ""}
          , sent to me {watch("deliveries") || "_____"}."
        </p>
      </div>

      <button className="mt-4 p-2" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Create my plan!"}
      </button>
    </form>
  );
};

export default SubscribeForm;
