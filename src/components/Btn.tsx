interface BtnProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Btn = ({ children, className, isDisabled, onClick }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-md font-black leading-6 text-custom-light-cream transition-colors disabled:bg-custom-dark-grey ${isDisabled ? "" : "hover:bg-custom-pale-orange hover:text-black focus-visible:bg-custom-pale-orange focus-visible:text-black"} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Btn;
