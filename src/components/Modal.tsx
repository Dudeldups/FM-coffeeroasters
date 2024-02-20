import React from "react";

interface ModalProps {
  summaryString: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ summaryString, isModalOpen, setIsModalOpen }: ModalProps) => {
  if (!isModalOpen) return null;
  return (
    <>
      <div>{summaryString}</div>
      <button onClick={() => setIsModalOpen(false)}>Close me</button>
    </>
  );
};

export default Modal;
