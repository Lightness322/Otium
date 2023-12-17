import axios from "axios";

import { AppDispatch } from "../store";
import { developerGamesSlice } from "./DeveloperGamesSlice";

import { IGame } from "../../features/games/types/IGame";

import { RAWG_API } from "../../data/apiKeys";

interface IDeveloperGamesResponse {
  data: { results: IGame[]; count: number };
}

interface IDeveloperNameResponse {
  data: { name: string };
}

interface IFetchDeveloperGamesArguments {
  page: string | null;
  developerId?: string;
}

export const fetchDeveloperGames =
  ({ page, developerId }: IFetchDeveloperGamesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(developerGamesSlice.actions.developerGamesFetch());

      const nameResponse: IDeveloperNameResponse = await axios({
        url: `https://api.rawg.io/api/developers/${developerId}?key=${RAWG_API}`,
        method: "get",
      });

      const response: IDeveloperGamesResponse = await axios({
        url: `https://api.rawg.io/api/games?key=${RAWG_API}&search_exact=true&ordering=-added&developers=${developerId}&page=${page}`,
        method: "get",
      });

      const filteredGames = response.data.results.filter(
        (game) =>
          !game.name.toLowerCase().includes("goodie") &&
          !game.name.toLowerCase().includes("demo") &&
          game.added !== 0 &&
          game.rating !== 0,
      );

      const totalPages =
        response.data.count > 100 ? 5 : Math.floor(response.data.count / 20);

      dispatch(
        developerGamesSlice.actions.developerGamesSetCurrentPage(+page!),
      );
      dispatch(
        developerGamesSlice.actions.developerGamesSetTotalPages(totalPages),
      );
      dispatch(
        developerGamesSlice.actions.developerGamesSetName(
          nameResponse.data.name,
        ),
      );
      dispatch(
        developerGamesSlice.actions.developerGamesFetchSuccess(filteredGames),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(
          developerGamesSlice.actions.developerGamesFetchError(e.message),
        );
      }
    }
  };
