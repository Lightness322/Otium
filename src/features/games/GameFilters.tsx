import { gameGenres } from "../../data/gameGenres";

import { UseFormRegister } from "react-hook-form";
import { TypeSetStateFunction } from "../../types/TypeSetStateFunction";
import { IFiltersFormData } from "../../types/IFiltersFormData";

import Select from "../../ui/Select";
import SliderMinMax from "../../ui/SliderMinMax";

interface IGameFiltersProps {
  isShowFilters: boolean;
  register: UseFormRegister<IFiltersFormData>;
  ratingValue: number[];
  yearsValue: number[];
  setRatingValue: TypeSetStateFunction<number[]>;
  setYearsValue: TypeSetStateFunction<number[]>;
}

const currentYear = new Date().getFullYear();

const GameFilters: React.FC<IGameFiltersProps> = ({
  isShowFilters,
  register,
  ratingValue,
  setRatingValue,
  yearsValue,
  setYearsValue,
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
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4">
            <Select name="Жанр" value="genre" register={register}>
              {gameGenres.map((gameGenreObj) => (
                <option key={gameGenreObj.id}>{gameGenreObj.genre}</option>
              ))}
            </Select>
          </div>
          <SliderMinMax
            name="Рейтинг"
            value={ratingValue}
            min={1}
            max={100}
            handleChange={handleRatingChange}
            setValue={setRatingValue}
          />
          <SliderMinMax
            name="Год"
            value={yearsValue}
            min={1971}
            max={currentYear}
            handleChange={handleYearsChange}
            setValue={setYearsValue}
          />
        </div>
      )}
    </>
  );
};

export default GameFilters;
