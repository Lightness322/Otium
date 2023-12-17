import { UseFormRegister } from "react-hook-form";
import { IFiltersFormData } from "../types/IFiltersFormData";

interface ISelectProps {
  name: string;
  value: "genre" | "country" | "type" | "order";
  children: JSX.Element | JSX.Element[];
  register: UseFormRegister<IFiltersFormData>;
  needAll?: boolean;
}

const Select: React.FC<ISelectProps> = ({
  name,
  value,
  children,
  register,
  needAll = false,
}) => {
  return (
    <label
      className={`grid grid-cols-[100px,_max-content] ${
        value === "order"
          ? "max-[816px]:flex max-[816px]:flex-col max-[816px]:items-center max-[816px]:gap-y-1 max-[600px]:flex-row max-[600px]:gap-x-4"
          : ""
      }`}
    >
      <span className="font-semibold">{name}</span>
      <select
        className="rounded-md bg-hover-color pl-1"
        {...register(`${value}`)}
      >
        {needAll && <option>&mdash;</option>}
        {children}
      </select>
    </label>
  );
};

export default Select;
