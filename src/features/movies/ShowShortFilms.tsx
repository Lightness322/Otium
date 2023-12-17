import { TypeSetStateFunction } from "../../types/TypeSetStateFunction";

import { Checkbox } from "@mui/material";

interface IShowShortFilmsProps {
  isShortMoviesIncluded?: boolean;
  setIsShortMoviesIncluded?: TypeSetStateFunction<boolean>;
}

const ShowShortFilms: React.FC<IShowShortFilmsProps> = ({
  isShortMoviesIncluded,
  setIsShortMoviesIncluded,
}) => {
  return (
    <label className="mt-[-14px] flex items-center gap-x-2">
      <span className="font-semibold">Показывать короткометражки</span>
      <Checkbox
        sx={{
          color: "var(--font-secondary-color)",
          "&.Mui-checked": {
            color: "var(--font-secondary-color)",
          },
        }}
        onChange={() => {
          if (setIsShortMoviesIncluded) {
            setIsShortMoviesIncluded((isIncluded) => !isIncluded);
          }
        }}
        checked={isShortMoviesIncluded}
      />
    </label>
  );
};

export default ShowShortFilms;
