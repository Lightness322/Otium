interface IValidationErrorProps {
  children: string;
}

const ValidationError: React.FC<IValidationErrorProps> = ({ children }) => {
  return (
    <div className="absolute bottom-[-27px] left-[120px] text-[15px] text-red-600">
      {children}
    </div>
  );
};

export default ValidationError;
