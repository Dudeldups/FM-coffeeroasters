interface BtnProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const Btn = ({ children, className, isDisabled }: BtnProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-md font-black leading-6 text-custom-light-cream disabled:bg-custom-dark-grey ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Btn;
