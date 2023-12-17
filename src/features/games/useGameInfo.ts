import { IGameDetails } from "./types/IGameDetails";

export function useGameInfo(gameDetails: IGameDetails) {
  const { genres, released, platforms, developers, rating } = gameDetails;

  const gameGenres = genres
    ?.map((gameGenreObj) => gameGenreObj.name)
    .join(", ");

  const year = released ? released.slice(0, 4) : "";

  const gamePlatforms = platforms
    ?.map((platformObj) => platformObj.platform.name.replaceAll(" ", "\u00A0"))
    .join(", ");

  const developer = developers?.slice(0, 1).at(0);

  return { gameGenres, year, gamePlatforms, developer, rating };
}
