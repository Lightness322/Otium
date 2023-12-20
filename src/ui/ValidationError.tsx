interface IValidationErrorProps {
  children: string;
}

const ValidationError: React.FC<IValidationErrorProps> = ({ children }) => {
  return (
    <div className="absolute bottom-[-25px] left-[105px] text-sm text-red-600 max-[519px]:left-[0]">
      {children}
    </div>
  );
};

export default ValidationError;
