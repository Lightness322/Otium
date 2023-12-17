import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useMoviesFilters } from "./useMoviesFilters";

import { movieOrders } from "../../data/movieOrders";

import { IFiltersFormData } from "../../types/IFiltersFormData";

import Select from "../../ui/Select";
import SelectSortOptions from "../../ui/SelectSortOptions";
import Filters from "../../ui/Filters";
import Search from "../../ui/Search";

const currentYear = new Date().getFullYear();

interface ISearchAndFiltersProps {
  inView: boolean;
}

const SearchAndFiltersMovies: React.FC<ISearchAndFiltersProps> = ({
  inView,
}) => {
  const [isShowFilters, setIsShowFilters] = useState<boolean>(false);
  const [ratingValue, setRatingValue] = useState<number[]>([1, 10]);
  const [yearsValue, setYearsValue] = useState<number[]>([1895, currentYear]);

  const [searchParams] = useSearchParams();

  const shortFilms = searchParams.get("shortFilms");

  const [isShortMoviesIncluded, setIsShortMoviesIncluded] = useState<boolean>(
    shortFilms === "true" ? true : false,
  );

  const { handleSubmit, register } = useForm<IFiltersFormData>();

  const { onSubmit } = useMoviesFilters({
    inView,
    ratingValue,
    yearsValue,
    isShortMoviesIncluded,
    isShowFilters,
  });

  function handleShowFilters() {
    setIsShowFilters((isShow) => !isShow);
  }

  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex items-center justify-between max-[600px]:flex-col max-[600px]:gap-y-4">
        <Search
          handleShowFilters={handleShowFilters}
          register={register}
          type="movie"
        />
        <Select
          name="Сортировка"
          value="order"
          register={register}
          needAll={false}
        >
          <SelectSortOptions options={movieOrders} />
        </Select>
      </div>
      <Filters
        isShowFilters={isShowFilters}
        register={register}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        yearsValue={yearsValue}
        setYearsValue={setYearsValue}
        isShortMoviesIncluded={isShortMoviesIncluded}
        setIsShortMoviesIncluded={setIsShortMoviesIncluded}
        type="movie"
      />
    </form>
  );
};

export default SearchAndFiltersMovies;
