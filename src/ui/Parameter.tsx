import { ICountry, IGenre } from "../features/movies/types/IMovie";

interface IParameterProps {
  name: string;
  parameter:
    | string
    | number
    | IGenre[]
    | ICountry[]
    | React.JSX.Element
    | Element[];
  className?: string;
  parameterClassName?: string;
}

let parameters:
  | string
  | number
  | IGenre[]
  | ICountry[]
  | React.JSX.Element
  | Element[];

const Parameter: React.FC<IParameterProps> = ({
  name,
  parameter,
  className,
  parameterClassName,
}) => {
  if (parameter instanceof Array) {
    parameters = parameter
      .map((object) => Object.values(object))
      .flat()
      .join(", ");
  } else {
    parameters = parameter;
  }

  return (
    <div
      className={`grid grid-cols-[150px,_1fr] items-center ${
        className ? className : ""
      }`}
    >
      <div className="font-medium">{name}</div>
      <pre
        className={`whitespace-normal ${
          parameterClassName
            ? `${parameterClassName}`
            : "text-font-secondary-color"
        }`}
      >
        {parameters}
      </pre>
    </div>
  );
};

export default Parameter;
