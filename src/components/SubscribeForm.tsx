import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import subscriptionData from "../data/subscriptions.json";
import priceData from "../data/prices.json";
import Btn from "./Btn";

interface SubscribeFormProps {
  summaryString: string;
  setSummaryString: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Prices {
  [key: string]: {
    "Every-week": number;
    "Every-2-weeks": number;
    "Every-month": number;
  };
}

const SubscribeForm = ({
  summaryString,
  setSummaryString,
  setIsModalOpen,
}: SubscribeFormProps) => {
  const [isExpanded, setIsExpanded] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

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

  const prices: Prices = priceData;

  const formData = watch();

  const isCapsuleSelected = formData["Preferences"] === "Capsule";

  let currentFormStep =
    1 +
    Object.values(formData).filter((value) => typeof value === "string").length;

  if (
    !isCapsuleSelected &&
    currentFormStep >= 5 &&
    typeof formData["Grind-Option"] !== "string"
  ) {
    currentFormStep = 4;
  } else if (currentFormStep === 4 && isCapsuleSelected) {
    currentFormStep = 5;
  } else if (currentFormStep === 5 && isCapsuleSelected) {
    currentFormStep = 6;
  } else if (
    isCapsuleSelected &&
    typeof formData["Grind-Option"] === "string"
  ) {
    setValue("Grind-Option", undefined);
  }

  useEffect(() => {
    setSummaryString(
      `“I drink my coffee ${
        isCapsuleSelected
          ? "using Capsules"
          : `as ${formData["Preferences"] || "_____"}`
      }, with a ${formData["Bean-Type"] || "_____"} type of bean. ${formData["Quantity"] || "_____"}${
        !isCapsuleSelected
          ? formData["Grind-Option"]
            ? ` ground ala ${formData["Grind-Option"]}`
            : " ground ala _____"
          : ""
      }, sent to me ${formData["Deliveries"] || "_____"}.”`,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  console.log(currentFormStep);
  console.log(isExpanded);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-col-center my-28 max-w-[25rem] md:my-36 md:max-w-[45rem] lg:my-40 xl:items-end"
    >
      <ul className="grid gap-24 lg:gap-20">
        {subscriptionData.map((question) => {
          const questionSplit = question.name.split(" ").join("-");

          return (
            <li key={question.id + question.question}>
              <fieldset
                aria-expanded={currentFormStep === question.id}
                aria-live="polite"
              >
                <legend className="peer relative w-full pr-7">
                  <h2 className="text-lg/[1.75rem] text-custom-dark-grey md:text-xl lg:text-2xl">
                    {question.question}
                  </h2>

                  <button
                    type="button"
                    className="absolute inset-0 z-10 flex"
                    onClick={() =>
                      setIsExpanded((val) => {
                        if (question.id === 4 && isCapsuleSelected) {
                          setError(questionSplit, {
                            message:
                              "You don't need to change this option if you've selected Capsules.",
                          });

                          return val;
                        }
                        return {
                          ...val,
                          [question.id]: !val[question.id],
                        };
                      })
                    }
                  >
                    {
                      // TODO add logic for sr-only text
                    }
                    <span className="sr-only">Expand</span>
                    <span
                      className={`ml-auto mr-1 mt-3 block h-3 w-3 border-r-[3px] border-t-[3px] border-custom-dark-cyan transition-transform md:mt-4 lg:mt-5 ${isExpanded[question.id] ? "-translate-y-1/2 rotate-[135deg]" : "-rotate-45"}`}
                    ></span>
                  </button>
                </legend>

                <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-2 lg:mt-14 lg:gap-6">
                  {question.options.map((option) => {
                    const optionSplit = option.name.split(" ").join("-");
                    const priceString =
                      currentFormStep > 3
                        ? "$" +
                          (prices[formData["Quantity"]]
                            ? // @ts-expect-error // TS doesn't like dynamic key
                              prices[formData["Quantity"]][optionSplit]
                            : "")
                        : "";

                    return (
                      <div
                        key={question.id + option.name}
                        className={`cursor-pointer rounded-lg p-6 outline-2 outline-offset-2 outline-custom-dark-grey focus-within:outline md:pb-14 md:pt-8 ${formData[questionSplit] === option.name ? "bg-custom-dark-cyan text-custom-light-cream" : "bg-custom-very-light-grey text-custom-dark-blue focus-within:bg-custom-pale-orange hover:bg-custom-pale-orange"}`}
                        onClick={() => {
                          if (question.id === 4 && isCapsuleSelected) return;
                          if (currentFormStep < question.id) {
                            setError(questionSplit, {
                              message:
                                "Please answer the previous question first.",
                            });
                          } else {
                            clearErrors();
                            setValue(questionSplit, option.name);
                            setIsExpanded((val) => {
                              if (
                                isCapsuleSelected ||
                                option.name === "Capsule"
                              ) {
                                return {
                                  ...val,
                                  4: false,
                                  [currentFormStep === 3
                                    ? 5
                                    : currentFormStep + 1]: true,
                                };
                              } else {
                                return {
                                  ...val,
                                  [currentFormStep + 1]: true,
                                };
                              }
                            });
                          }
                        }}
                      >
                        <input
                          className="sr-only"
                          {...register(questionSplit, {
                            required:
                              currentFormStep !== 4 || !isCapsuleSelected,
                            disabled:
                              question.id === 4 && isCapsuleSelected
                                ? true
                                : currentFormStep < question.id,
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
                          className="mt-2 md:mt-5"
                          id={`${questionSplit}-${optionSplit}-d`}
                        >
                          {question.id === 5 && currentFormStep > 3
                            ? priceString + " per shipment. "
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

      <div className="mt-20 rounded-lg bg-custom-dark-blue px-6 py-7 text-lg text-white md:px-11 md:py-8 lg:px-16">
        <h2 className="font-barlow text-sm font-normal uppercase text-custom-light-grey">
          Order summary
        </h2>
        <p className="mt-3 font-fraunces font-black">{summaryString}</p>
      </div>

      <Btn className="mt-14" isDisabled={isSubmitting || currentFormStep < 6}>
        {isSubmitting ? "Loading..." : "Create my plan!"}
      </Btn>
    </form>
  );
};

export default SubscribeForm;
