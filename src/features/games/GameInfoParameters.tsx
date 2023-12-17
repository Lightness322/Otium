import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router";
import { useGameInfo } from "./useGameInfo";

import { developerGamesSlice } from "../../store/gamesReducers/DeveloperGamesSlice";

import { IGameDetails } from "./types/IGameDetails";

import Parameter from "../../ui/Parameter";

interface IGameInfoParametersProps {
  gameDetails: IGameDetails;
}

const GameInfoParameters: React.FC<IGameInfoParametersProps> = ({
  gameDetails,
}) => {
  const { gameGenres, year, gamePlatforms, developer, rating } =
    useGameInfo(gameDetails);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  if (!developer) return null;

  return (
    <>
      <Parameter
        name="Разработчик"
        parameter={
          <button
            className="underline underline-offset-2 hover:text-white"
            onClick={() => {
              dispatch(
                developerGamesSlice.actions.developerGamesSetName(
                  developer.name,
                ),
              );
              navigate(`/games/developer/${developer.id}`);
            }}
          >
            {developer.name}
          </button>
        }
        parameterClassName="text-[#b6b6b6]"
      />
      <Parameter
        name="Платформы"
        parameter={gamePlatforms}
        parameterClassName="text-[#b6b6b6]"
      />
      <Parameter
        name="Жанры"
        parameter={gameGenres}
        parameterClassName="text-[#b6b6b6]"
      />
      <Parameter
        name="Год"
        parameter={year}
        parameterClassName="text-[#b6b6b6]"
      />
      <Parameter
        name="Рейтинг"
        parameter={rating}
        parameterClassName="text-xl font-bold text-[#b6b6b6]"
      />
    </>
  );
};

export default GameInfoParameters;
