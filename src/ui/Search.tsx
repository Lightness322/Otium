import { UseFormRegister } from "react-hook-form";
import { IFiltersFormData } from "../types/IFiltersFormData";

import { BsSliders } from "react-icons/bs";
import InputSearch from "./InputSearch";
import Button from "./Button";

interface ISearchProps {
  type: "movie" | "game";
  register: UseFormRegister<IFiltersFormData>;
  handleShowFilters: () => void;
}

const Search: React.FC<ISearchProps> = ({
  register,
  handleShowFilters,
  type,
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <InputSearch
        type={type}
        value="keyword"
        register={register}
        placeholder="найти..."
      />
      <Button
        className="h-[48px] w-[50px] rounded-md hover:outline hover:outline-1 hover:outline-font-primary-color"
        onClick={handleShowFilters}
      >
        <BsSliders size="20" />
      </Button>
    </div>
  );
};

export default Search;
