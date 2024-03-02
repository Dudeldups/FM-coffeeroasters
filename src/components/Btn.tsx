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
      className={`rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-md font-black leading-6 text-custom-light-cream disabled:bg-custom-dark-grey ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Btn;
