import { useSearchParams } from "react-router-dom";

import { IGame } from "../features/games/types/IGame";
import { IMovie } from "../features/movies/types/IMovie";

import { MdMovieEdit } from "react-icons/md";
import { GiGameConsole } from "react-icons/gi";

interface INoneResultsProps {
  items: IGame[] | IMovie[];
  isLoading: boolean;
  type: "movie" | "game";
}

const NoneResults: React.FC<INoneResultsProps> = ({
  items,
  isLoading,
  type,
}) => {
  const [searchParams] = useSearchParams();

  return (
    <>
      {searchParams.size > 0 && items.length === 0 && !isLoading && (
        <div className="absolute left-[calc(50%-342px)] top-[calc(50%-16px)] text-center text-2xl font-medium max-[767px]:static max-[767px]:pt-10 max-[593px]:text-xl">
          По данному запросу отсутствуют релевантные результаты
        </div>
      )}
      {searchParams.size === 0 &&
        items.length === 0 &&
        !isLoading &&
        type === "movie" && (
          <div className="absolute left-[calc(50%-163px)] top-[calc(50%-16px)] text-center text-2xl font-medium max-[767px]:static max-[767px]:pt-10 max-[593px]:text-xl">
            <span>Укажите параметры поиска</span>
            <span className="w-full">
              <MdMovieEdit className="mx-auto" size="60" />
            </span>
          </div>
        )}
      {searchParams.size === 0 &&
        items.length === 0 &&
        !isLoading &&
        type === "game" && (
          <div className="absolute left-[calc(50%-163px)] top-[calc(50%-16px)] text-center text-2xl font-medium max-[767px]:static max-[767px]:pt-10 max-[593px]:text-xl">
            <span>Укажите параметры поиска</span>
            <span className="w-full">
              <GiGameConsole className="mx-auto" size="60" />
            </span>
          </div>
        )}
    </>
  );
};

export default NoneResults;
