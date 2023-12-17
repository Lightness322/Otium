interface IButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
  bg?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  onClick,
  children,
  className,
  onMouseLeave,
  onMouseEnter,
  disabled = false,
  bg = true,
}) => {
  return (
    <button
      className={`flex items-center justify-center ${
        bg ? "bg-hover-color" : ""
      } ${className}`}
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
