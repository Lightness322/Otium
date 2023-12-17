import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGamesFilters } from "./useGamesFilters";

import { gamesOrders } from "../../data/gamesOrders";

import { IFiltersFormData } from "../../types/IFiltersFormData";

import Search from "../../ui/Search";
import Select from "../../ui/Select";
import SelectSortOptions from "../../ui/SelectSortOptions";
import Filters from "../../ui/Filters";

interface IGamesSearchAndFiltersProps {
  inView: boolean;
}

const currentYear = new Date().getFullYear();

const GamesSearchAndFilters: React.FC<IGamesSearchAndFiltersProps> = ({
  inView,
}) => {
  const [isShowFilters, setIsShowFilters] = useState<boolean>(false);
  const [ratingValue, setRatingValue] = useState<number[]>([1, 100]);
  const [yearsValue, setYearsValue] = useState<number[]>([1971, currentYear]);

  const { handleSubmit, register } = useForm<IFiltersFormData>();

  const { onSubmit } = useGamesFilters({
    inView,
    ratingValue,
    yearsValue,
    isShowFilters,
  });

  function handleShowFilters() {
    setIsShowFilters((isShow) => !isShow);
  }

  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex items-center justify-between max-[600px]:flex-col max-[600px]:gap-y-4">
        <Search
          type="game"
          register={register}
          handleShowFilters={handleShowFilters}
        />
        <Select
          name="Сортировка"
          value="order"
          register={register}
          needAll={false}
        >
          <SelectSortOptions options={gamesOrders} />
        </Select>
      </div>
      <Filters
        isShowFilters={isShowFilters}
        register={register}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        yearsValue={yearsValue}
        setYearsValue={setYearsValue}
        type="game"
      />
    </form>
  );
};

export default GamesSearchAndFilters;
