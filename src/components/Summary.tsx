import { FieldValues } from "react-hook-form";

interface SummaryProps {
  formData: FieldValues;
}

const Summary = ({ formData }: SummaryProps) => {
  const isCapsuleSelected = formData["Preferences"] === "Capsule";

  return (
    <p className="mt-3 font-fraunces font-black">
      “I drink my coffee
      {isCapsuleSelected ? " using " : " as "}
      <span className="text-custom-dark-cyan">
        {formData["Preferences"] || "_____"}
      </span>
      , with a $
      <span className="text-custom-dark-cyan">
        {formData["Bean-Type"] || "_____"}
      </span>{" "}
      type of bean.
      <span className="text-custom-dark-cyan">
        {formData["Quantity"] || "_____"}
      </span>
      {!isCapsuleSelected ? " ground ala " : ""}
      {!isCapsuleSelected && (
        <span className="text-custom-dark-cyan">
          {formData["Grind-Option"] || "_____"}
        </span>
      )}
      , sent to me{" "}
      <span className="text-custom-dark-cyan">
        {formData["Deliveries"] || "_____"}
      </span>
      .”
    </p>
  );
};

export default Summary;
