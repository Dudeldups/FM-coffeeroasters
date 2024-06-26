import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import subscriptionData from "../data/subscriptions.json";
import priceData from "../data/prices.json";
import Btn from "./Btn";
import Summary from "./Summary";
import Modal from "./Modal";
import Loading from "./Loading";

interface SubscribeFormProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Prices {
  [key: string]: {
    "Every-week": number;
    "Every-2-weeks": number;
    "Every-month": number;
  };
}

const SubscribeForm = ({ isModalOpen, setIsModalOpen }: SubscribeFormProps) => {
  const [isExpanded, setIsExpanded] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [totalPrice, setTotalPrice] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
    setError,
    clearErrors,
    setValue,
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsModalOpen(true);
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
    setIsExpanded((val) => {
      if (isCapsuleSelected) {
        return {
          ...val,
          4: false,
          [currentFormStep === 4 ? 5 : currentFormStep]: true,
        };
      } else {
        return {
          ...val,
          [currentFormStep]: true,
        };
      }
    });

    async function focusFieldset() {
      if (currentFormStep > 1) {
        await new Promise((resolve) => setTimeout(resolve, 400));

        const nextFieldset = document.getElementById(`step-${currentFormStep}`);
        nextFieldset?.focus();
        nextFieldset?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    focusFieldset();
  }, [currentFormStep, isCapsuleSelected]);

  useEffect(() => {
    if (currentFormStep > 5) {
      const amount = formData["Quantity"];
      const howOften = formData["Deliveries"].split(" ").join("-");
      //@ts-expect-error // TS doesn't like dynamic key
      const price = prices[amount][howOften];
      const multiplier =
        howOften === "Every-week" ? 4 : howOften === "Every-2-weeks" ? 2 : 1;
      const finalPrice = multiplier * price;
      setTotalPrice(finalPrice.toFixed(2));
    }
  }, [formData, currentFormStep, prices]);

  useEffect(() => {
    if (isSubmitted) setIsModalOpen(true);
  }, [isSubmitted, setIsModalOpen]);

  return (
    <div className="my-28 flex w-full max-w-[70rem] justify-center md:my-36 lg:my-40 xl:justify-between">
      <ol className="-mt-4 hidden content-start font-fraunces text-lg font-bold text-custom-grey xl:grid">
        <li
          className={`relative py-4 pr-8 before:mr-4 before:content-["0"_counter(list-item)] ${currentFormStep === 1 ? "text-custom-dark-blue before:text-custom-dark-blue" : ""}`}
        >
          Preferences
          <span
            className={`absolute right-2 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors ${currentFormStep === 1 ? "border-custom-dark-cyan bg-custom-pale-orange" : "border-transparent bg-transparent"}`}
          ></span>
        </li>
        <li
          className={`relative border-t border-custom-grey py-4 pr-8 before:mr-4 before:content-["0"_counter(list-item)] ${currentFormStep === 2 ? "text-custom-dark-blue before:text-custom-dark-blue" : ""}`}
        >
          Bean Type
          <span
            className={`absolute right-2 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors ${currentFormStep === 2 ? "border-custom-dark-cyan bg-custom-pale-orange" : "border-transparent bg-transparent"}`}
          ></span>
        </li>
        <li
          className={`relative border-t border-custom-grey py-4 pr-8 before:mr-4 before:content-["0"_counter(list-item)] ${currentFormStep === 3 ? "text-custom-dark-blue before:text-custom-dark-blue" : ""}`}
        >
          Quantity
          <span
            className={`absolute right-2 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors ${currentFormStep === 3 ? "border-custom-dark-cyan bg-custom-pale-orange" : "border-transparent bg-transparent"}`}
          ></span>
        </li>
        <li
          className={`relative border-t border-custom-grey py-4 pr-8 before:mr-4 before:content-["0"_counter(list-item)] ${isCapsuleSelected ? "opacity-50" : ""} ${currentFormStep === 4 ? "text-custom-dark-blue before:text-custom-dark-blue" : ""}`}
        >
          Grind Option
          <span
            className={`absolute right-2 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors ${currentFormStep === 4 ? "border-custom-dark-cyan bg-custom-pale-orange" : "border-transparent bg-transparent"}`}
          ></span>
        </li>
        <li
          className={`relative border-t border-custom-grey py-4 pr-8 before:mr-4 before:content-["0"_counter(list-item)] ${currentFormStep === 5 ? "text-custom-dark-blue before:text-custom-dark-blue" : ""}`}
        >
          Deliveries
          <span
            className={`absolute right-2 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors ${currentFormStep === 5 ? "border-custom-dark-cyan bg-custom-pale-orange" : "border-transparent bg-transparent"}`}
          ></span>
        </li>
      </ol>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col-center max-w-[25rem] md:max-w-[45rem] xl:items-end"
      >
        <ul className="grid gap-24 lg:gap-20">
          {subscriptionData.map((question) => {
            const questionSplit = question.name.split(" ").join("-");

            return (
              <li
                key={question.id + question.question}
                id={`step-${question.id}`}
              >
                <fieldset
                  aria-expanded={currentFormStep >= question.id}
                  aria-live="polite"
                >
                  <legend className="peer relative w-full pr-7">
                    <h2
                      className={`text-lg/[1.75rem] text-custom-dark-grey md:text-xl lg:text-2xl ${question.id === 4 && isCapsuleSelected ? "opacity-50" : ""}`}
                    >
                      {question.question}
                    </h2>

                    <button
                      type="button"
                      className="absolute inset-0 z-10 flex w-full"
                      aria-pressed={isExpanded[question.id]}
                      aria-live="polite"
                      onClick={() =>
                        setIsExpanded((val) => {
                          if (question.id === 4 && isCapsuleSelected) {
                            setError(questionSplit, {
                              message:
                                "You don't need to change this option if you selected Capsules.",
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
                      <span className="sr-only">
                        {isExpanded[question.id] ? "collapse" : "expand"}
                      </span>
                      <span
                        className={`ml-auto mr-1 mt-3 block h-3 w-3 border-r-[3px] border-t-[3px] border-custom-dark-cyan transition-transform md:mt-4 lg:mt-5 ${isExpanded[question.id] ? "-translate-y-1/2 rotate-[135deg]" : "-rotate-45"}`}
                      ></span>
                    </button>
                  </legend>

                  <div
                    className={`grid py-2 transition-[grid-template-rows] duration-300 md:mt-7 lg:mt-9 lg:gap-6 ${isExpanded[question.id] ? "grid-rows-[1fr] ease-in" : "grid-rows-[0fr] ease-out"}`}
                  >
                    <div className="grid gap-4 overflow-hidden md:grid-cols-3 md:gap-2">
                      {question.options.map((option) => {
                        const optionSplit = option.name.split(" ").join("-");
                        const priceString =
                          currentFormStep > 3
                            ? "$" +
                              parseFloat(
                                // @ts-expect-error // TS doesn't like dynamic key
                                prices[formData["Quantity"]][optionSplit],
                              ).toFixed(2)
                            : "";

                        return (
                          <div
                            key={question.id + option.name}
                            className={`cursor-pointer rounded-lg p-6 outline-2 outline-offset-2 outline-custom-dark-grey transition-colors focus-within:outline mobile:first:mt-6 md:pb-14 md:pt-8 ${formData[questionSplit] === option.name ? "bg-custom-dark-cyan text-custom-light-cream" : "bg-custom-very-light-grey text-custom-dark-blue focus-within:bg-custom-pale-orange hover:bg-custom-pale-orange"}`}
                            onClick={() => {
                              if (question.id === 4 && isCapsuleSelected)
                                return;
                              if (currentFormStep < question.id) {
                                setError(questionSplit, {
                                  message:
                                    "Please answer the previous question first.",
                                });
                              } else {
                                clearErrors();
                                setValue(questionSplit, option.name);
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
                              <span
                                className={`font-fraunces text-lg font-black`}
                              >
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
                  </div>
                </fieldset>
                {errors[questionSplit] && (
                  <p
                    className="ml-6 mt-2 text-md font-semibold text-red-500"
                    aria-live="polite"
                  >
                    {errors[questionSplit]?.message as string}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        <div
          id="step-6"
          className="mt-20 rounded-lg bg-custom-dark-blue px-6 py-7 text-lg text-white md:px-11 md:py-8 lg:px-16"
        >
          <h2 className="font-barlow text-sm font-normal uppercase text-custom-light-grey">
            Order summary
          </h2>
          <Summary formData={formData} />
        </div>

        <Btn className="mt-14" isDisabled={isSubmitting || currentFormStep < 6}>
          {isSubmitting ? <Loading /> : "Create my plan!"}
        </Btn>
      </form>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          formData={formData}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default SubscribeForm;
