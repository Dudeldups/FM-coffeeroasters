import React from "react";
import Btn from "./Btn";
import { FieldValues } from "react-hook-form";
import Summary from "./Summary";

interface ModalProps {
  totalPrice: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FieldValues;
}

const Modal = ({ formData, setIsModalOpen, totalPrice }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-40 grid place-content-center bg-black bg-opacity-80 p-4">
      <div className="overflow-hidden rounded-lg">
        <div className="z-50 bg-custom-dark-blue p-6">
          <h2 className="text-custom-light-cream">Order Summary</h2>
        </div>
        <div className="z-50 bg-custom-light-cream p-6 pb-10">
          <Summary
            formData={formData}
            className="mb-3 text-lg text-custom-dark-grey"
          />
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <Btn onClick={() => setIsModalOpen(false)} className="mt-6">
            Checkout <span>{" - $" + totalPrice}</span>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Modal;
