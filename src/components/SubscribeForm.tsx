import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import subscriptionData from "../data/subscriptions.json";
import Btn from "./Btn";

interface SubscribeFormProps {
  summaryString: string;
  setSummaryString: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Prices {
  [key: string]: {
    Everyweek: number;
    Every2weeks: number;
    Everymonth: number;
  };
}

const SubscribeForm = ({
  summaryString,
  setSummaryString,
  setIsModalOpen,
}: SubscribeFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    setValue,
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsModalOpen(true);
    console.log(data);
  };

  const prices: Prices = {
    "250g": {
      Everyweek: 7.2,
      Every2weeks: 9.6,
      Everymonth: 12.0,
    },
    "500g": {
      Everyweek: 13.0,
      Every2weeks: 17.5,
      Everymonth: 22.0,
    },
    "1000g": {
      Everyweek: 22.0,
      Every2weeks: 32.0,
      Everymonth: 42.0,
    },
  };

  console.log(errors);

  const formData = watch();

  const currentFormStep =
    Object.values(formData).filter(
      (value) => value !== null && value !== undefined,
    ).length + 1;
  const isCapsuleSelected = formData["Preferences"] === "Capsule";

  useEffect(() => {
    setSummaryString(
      `"I drink my coffee ${
        isCapsuleSelected
          ? "using Capsules"
          : `as ${formData["Preferences"] || "_____"}`
      }, with a ${formData["Bean-Type"] || "_____"} type of bean. ${formData["Quantity"] || "_____"}${
        !isCapsuleSelected
          ? formData["Grind-Option"]
            ? ` ground ala ${formData["Grind-Option"]}`
            : " ground ala _____"
          : ""
      }, sent to me ${formData["Deliveries"] || "_____"}.`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-28 md:mt-36 md:max-w-[45rem] lg:mt-40"
    >
      {currentFormStep}
      {`${formData["Preferences"]}`}
      {`${formData["Bean-Type"]}`}
      <ul className="grid gap-24 lg:gap-20">
        {subscriptionData.map((question) => {
          const isQuestionFive = question.id === 5;
          const questionSplit = question.name.split(" ").join("-");
          return (
            <li key={question.id + question.question}>
              <fieldset
                className=""
                aria-expanded={currentFormStep === question.id}
                aria-live="polite"
              >
                <legend className="peer flex w-full items-start justify-between gap-4">
                  <h2 className="text-lg/[1.75rem] text-custom-dark-grey md:text-xl lg:text-2xl">
                    {question.question}
                  </h2>

                  <button type="button" className="mt-3 inline w-6">
                    <span className="sr-only">Expand</span>
                    <span className="mx-auto block h-3 w-3 -rotate-45 border-r-[3px] border-t-[3px] border-custom-dark-cyan"></span>
                  </button>
                </legend>

                <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-2 lg:mt-14 lg:gap-6">
                  {question.options.map((option) => {
                    const optionSplit = option.name.split(" ").join("-");
                    return (
                      <div
                        key={question.id + option.name}
                        className={`cursor-pointer rounded-lg p-6 outline-2 outline-offset-2 outline-custom-dark-grey focus-within:bg-custom-pale-orange focus-within:outline ${formData[questionSplit] === option.name ? "bg-custom-dark-cyan text-custom-light-cream" : "bg-custom-very-light-grey text-custom-dark-blue hover:bg-custom-pale-orange"}`}
                        onClick={() => {
                          if (currentFormStep < question.id) {
                            console.log("true");
                            setError(questionSplit, {
                              message:
                                "Please answer the previous question first.",
                            });
                          } else setValue(questionSplit, option.name);
                        }}
                      >
                        <input
                          className="sr-only"
                          {...register(questionSplit, {
                            required:
                              currentFormStep !== 4 || !isCapsuleSelected,
                            onChange: () => clearErrors(),
                            disabled: currentFormStep < question.id,
                          })}
                          type="radio"
                          id={`${questionSplit}-${optionSplit}`}
                          value={option.name}
                          aria-describedby={`${questionSplit}-${optionSplit}-d`}
                        />
                        <label
                          className={`cursor-pointer ${currentFormStep >= question.id ? "" : ""}`}
                          htmlFor={`${questionSplit}-${optionSplit}`}
                          onClick={() => {
                            if (currentFormStep < question.id) {
                              console.log("true");
                              setError(questionSplit, {
                                message:
                                  "Please answer the previous question first.",
                              });
                            }
                          }}
                        >
                          <span className={`font-fraunces text-lg font-black`}>
                            {option.name}
                          </span>
                        </label>

                        <p
                          className=""
                          id={`${questionSplit}-${optionSplit}-d`}
                        >
                          {isQuestionFive
                            ? // @ts-expect-error - TS doesn't like the optional chaining here
                              `${currentFormStep === 5 ? `$${prices[formData["Quantity"]]?.[optionSplit]} per shipment. ` : ""}`
                            : ""}
                          {option.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </fieldset>
              {errors[questionSplit] && (
                <p>{errors[questionSplit]?.message as string}</p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-4">
        <h2>Order summary</h2>
        <p>{summaryString}</p>
      </div>

      <Btn
        className="mt-4 p-2"
        isDisabled={isSubmitting || currentFormStep < 6}
      >
        {isSubmitting ? "Loading..." : "Create my plan!"}
      </Btn>
    </form>
  );
};

export default SubscribeForm;
