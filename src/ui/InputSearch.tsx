import { useAppSelector } from "../hooks/redux";

import { UseFormRegister } from "react-hook-form";
import { IFiltersFormData } from "../types/IFiltersFormData";
import { LoaderType } from "../enums/enums";

import { IoIosSearch } from "react-icons/io";
import Button from "./Button";
import Loader from "./Loader";

interface IInputSearchProps {
  value: "keyword";
  register: UseFormRegister<IFiltersFormData>;
  placeholder: string;
  type: "movie" | "game";
}

const InputSearch: React.FC<IInputSearchProps> = ({
  value,
  register,
  placeholder,
  type,
}) => {
  const { movies, isLoading: isMoviesLoading } = useAppSelector(
    (state) => state.moviesReducer,
  );

  const { games, isLoading: isGamesLoading } = useAppSelector(
    (state) => state.gamesReducer,
  );

  return (
    <div className="relative">
      <input
        className="w-[500px] rounded-md bg-hover-color p-3 placeholder:text-font-secondary-color max-[900px]:w-[400px] max-[714px]:w-[300px] max-[420px]:w-[280px]"
        autoComplete="off"
        placeholder={placeholder}
        {...register(`${value}`)}
        disabled={isMoviesLoading || isGamesLoading}
      />

      <Button
        className="absolute right-0 top-0 h-full w-[50px] rounded-br-md rounded-tr-md border-0 border-l-2 border-solid border-font-secondary-color text-font-secondary-color hover:text-font-primary-color"
        type="submit"
        disabled={isMoviesLoading || isGamesLoading}
      >
        <>
          {type === "movie" && (
            <>
              {type === "movie" && movies.length > 0 && isMoviesLoading ? (
                <Loader type={LoaderType.small} />
              ) : (
                <IoIosSearch size="25" />
              )}
            </>
          )}
          {type === "game" && (
            <>
              {type === "game" && games.length > 0 && isGamesLoading ? (
                <Loader type={LoaderType.small} />
              ) : (
                <IoIosSearch size="25" />
              )}
            </>
          )}
        </>
      </Button>
    </div>
  );
};

export default InputSearch;
