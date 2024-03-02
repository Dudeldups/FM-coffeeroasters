import React, { useEffect } from "react";
import Btn from "./Btn";
import { FieldValues } from "react-hook-form";
import Summary from "./Summary";

interface ModalProps {
  totalPrice: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FieldValues;
}

const Modal = ({ formData, setIsModalOpen, totalPrice }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-40 grid place-content-center bg-black bg-opacity-80 p-4"
      onClick={() => setIsModalOpen(false)}
    >
      <div className="overflow-hidden rounded-lg" onClick={handleContentClick}>
        <div className="z-50 bg-custom-dark-blue p-3 xs:p-6 md:p-12">
          <h2 className="text-custom-light-cream md:text-2xl">Order Summary</h2>
        </div>
        <div className="z-50 grid max-w-96 bg-custom-light-cream p-3 pb-10 xs:p-6 md:max-w-[33.75rem] md:p-12">
          <Summary
            formData={formData}
            className="mb-3 text-lg text-custom-dark-grey"
          />
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="mt-6 gap-2 md:grid md:grid-cols-2 md:items-center">
            <p className="font-fraunces text-xl font-black text-black  mobile:hidden">
              {`$ ${totalPrice} / mo`}
            </p>
            <Btn
              onClick={() => setIsModalOpen(false)}
              className="px-2 mobile:w-full"
            >
              Checkout{" "}
              <span className="md:hidden">{` - $ ${totalPrice} / mo`}</span>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
