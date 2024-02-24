interface BtnProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const Btn = ({ children, className }: BtnProps) => {
  return (
    <button
      className={`rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-lg font-black leading-6 text-custom-light-cream ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Btn;
