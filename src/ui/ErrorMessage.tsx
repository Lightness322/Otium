interface IErrorMessageProps {
  children: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ children }) => {
  return (
    <div className="fixed left-[calc(50%-40px)] top-[calc(50%-40px)] h-20 w-20">
      {children}
    </div>
  );
};

export default ErrorMessage;
