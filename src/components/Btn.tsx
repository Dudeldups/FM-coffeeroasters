interface BtnProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

const Btn = ({ children }: BtnProps) => {
  return (
    <button className="rounded-lg bg-custom-dark-cyan px-8 py-4 font-fraunces text-lg font-black leading-6 text-custom-light-cream">
      {children}
    </button>
  );
};

export default Btn;
