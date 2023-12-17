import { UseFormRegister } from "react-hook-form";

import { movieGenres } from "../data/movieGenres";
import { movieCountries } from "../data/movieCountries";
import { movieTypes } from "../data/movieTypes";
import { gameGenres } from "../data/gameGenres";

import { IFiltersFormData } from "../types/IFiltersFormData";
import { TypeSetStateFunction } from "../types/TypeSetStateFunction";

import Select from "./Select";
import SliderMinMax from "./SliderMinMax";
import ShowShortFilms from "../features/movies/ShowShortFilms";

interface IFiltersProps {
  isShowFilters: boolean;
  register: UseFormRegister<IFiltersFormData>;
  ratingValue: number[];
  yearsValue: number[];
  setRatingValue: TypeSetStateFunction<number[]>;
  setYearsValue: TypeSetStateFunction<number[]>;
  isShortMoviesIncluded?: boolean;
  setIsShortMoviesIncluded?: TypeSetStateFunction<boolean>;
  type: "movie" | "game";
}

const currentYear = new Date().getFullYear();

const Filters: React.FC<IFiltersProps> = ({
  isShowFilters,
  register,
  ratingValue,
  setRatingValue,
  yearsValue,
  setYearsValue,
  isShortMoviesIncluded,
  setIsShortMoviesIncluded,
  type,
}) => {
  const handleRatingChange = (_event: Event, newValue: number | number[]) => {
    setRatingValue(newValue as number[]);
  };

  const handleYearsChange = (_event: Event, newValue: number | number[]) => {
    setYearsValue(newValue as number[]);
  };

  return (
    <>
      {isShowFilters && (
        <div
          className={`flex items-center justify-evenly ${
            type === "movie" ? "gap-y-4 max-md:flex-col-reverse" : ""
          } ${
            type === "game"
              ? "max-[1012px]:flex-col-reverse max-[1012px]:gap-y-6 max-[620px]:flex-col-reverse"
              : ""
          }`}
        >
          <div className="flex h-full flex-col gap-y-4 max-[1010px]:gap-y-6">
            {type === "movie" && (
              <>
                <Select name="Страна" value="country" register={register}>
                  {movieCountries.map((countryObj) => (
                    <option key={countryObj.id}>{countryObj.country}</option>
                  ))}
                </Select>
                <Select name="Жанр" value="genre" register={register}>
                  {movieGenres.map((genreObj) => (
                    <option key={genreObj.id}>{genreObj.genre}</option>
                  ))}
                </Select>
                <Select name="Тип" value="type" register={register}>
                  {movieTypes.map((typeObj) => (
                    <option key={typeObj.value}>{typeObj.name}</option>
                  ))}
                </Select>
                <ShowShortFilms
                  isShortMoviesIncluded={isShortMoviesIncluded}
                  setIsShortMoviesIncluded={setIsShortMoviesIncluded}
                />
              </>
            )}
            {type === "game" && (
              <Select name="Жанр" value="genre" register={register}>
                {gameGenres.map((gameGenreObj) => (
                  <option key={gameGenreObj.id}>{gameGenreObj.genre}</option>
                ))}
              </Select>
            )}
          </div>
          <div
            className={`z-30 flex gap-x-16 ${
              type === "movie"
                ? "justify-between max-[1010px]:flex-col max-[1010px]:gap-y-6 max-md:flex-row max-[630px]:flex-col"
                : ""
            } ${type === "game" ? "max-[620px]:flex-col" : ""}`}
          >
            <SliderMinMax
              name="Рейтинг"
              value={ratingValue}
              min={1}
              max={type === "movie" ? 10 : 100}
              handleChange={handleRatingChange}
              setValue={setRatingValue}
            />
            <SliderMinMax
              name="Год"
              value={yearsValue}
              min={type === "movie" ? 1895 : 1971}
              max={currentYear}
              handleChange={handleYearsChange}
              setValue={setYearsValue}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
