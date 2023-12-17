import axios from "axios";

import { AppDispatch } from "../store";
import { gamesSlice } from "./GamesSlice";
import { gameDetailsSlice } from "./GameDetailsSlice";
import { gamesPartOfSeriesSlice } from "./GamesPartOfSeriesSlice";
import { gameScreenshotsSlice } from "./GamesScreenshotsSlice";
import { gameStoresSlice } from "./GameStoresSlice";

import { IGameScreenshot } from "../../features/games/types/IGameScreenshots";
import { IGameDetails } from "../../features/games/types/IGameDetails";
import { IGameStore } from "../../features/games/types/IGameStore";
import { IGame } from "../../features/games/types/IGame";

import { RAWG_API } from "../../data/apiKeys";

interface IGamesResponse {
  data: { results: IGame[]; count: number };
}

interface IGameDetailsResponse {
  data: IGameDetails;
}

interface IGamesPartOfSeriesResponse {
  data: { results: IGame[] | [] };
}

interface IGameStoresResponse {
  data: { results: IGameStore[] | [] };
}

interface IGameScreenshotsResponse {
  data: { results: IGameScreenshot[] | [] };
}

interface IFetchGamesArguments {
  genreId: string | null;
  ratingFrom: string | null;
  ratingTo: string | null;
  yearFrom: string | null;
  yearTo: string | null;
  keyword: string | null;
  page: string | null;
  order: string | null;
}

export const fetchGames =
  ({
    genreId,
    ratingFrom,
    ratingTo,
    yearFrom,
    yearTo,
    keyword,
    page,
    order,
  }: IFetchGamesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(gamesSlice.actions.gamesFetch());

      const formatKeyword = keyword !== null && keyword.replaceAll(" ", "-");

      const response: IGamesResponse = await axios({
        url: `https://api.rawg.io/api/games?key=${RAWG_API}&search_exact=true${
          keyword ? `&search=${formatKeyword}` : ""
        }${genreId ? `&genres=${genreId}` : ""}${
          genreId ? `&dates=${yearFrom}-01-01,${yearTo}-12-31` : ""
        }${genreId ? `&metacritic=${ratingFrom},${ratingTo}` : ""}${
          order ? `&ordering=${order}` : ""
        }&page=${page}`,
        method: "get",
      });

      console.log(response);

      const filteredGames = response.data.results.filter(
        (game) =>
          !game.name.toLowerCase().includes("goodie") &&
          !game.name.toLowerCase().includes("demo") &&
          game.added !== 0 &&
          game.rating !== 0,
      );

      const totalPages =
        response.data.count > 100 ? 5 : Math.floor(response.data.count / 20);

      dispatch(gamesSlice.actions.gamesSetCurrentPage(+page!));
      dispatch(gamesSlice.actions.gamesSetTotalPages(totalPages));
      dispatch(gamesSlice.actions.gamesFetchSuccess(filteredGames));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(gamesSlice.actions.gamesFetchError(e.message));
      }
    }
  };

export const fetchGameDetails =
  (gameId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(gameDetailsSlice.actions.gameDetailsFetch());
      const response: IGameDetailsResponse = await axios({
        url: `https://api.rawg.io/api/games/${gameId}?key=${RAWG_API}`,
        method: "get",
      });
      dispatch(gameDetailsSlice.actions.gameDetailsFetchSuccess(response.data));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(gameDetailsSlice.actions.gameDetailsFetchError(e.message));
      }
    }
  };

export const fetchGamesPartOfSeries =
  (gameId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(gamesPartOfSeriesSlice.actions.gamePartOfSeriesFetch());
      const response: IGamesPartOfSeriesResponse = await axios({
        url: `https://api.rawg.io/api/games/${gameId}/game-series?key=${RAWG_API}`,
        method: "get",
      });
      dispatch(
        gamesPartOfSeriesSlice.actions.gamePartOfSeriesFetchSuccess(
          response.data.results,
        ),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(
          gamesPartOfSeriesSlice.actions.gamePartOfSeriesFetchError(e.message),
        );
      }
    }
  };

export const fetchGameStores =
  (gameId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(gameStoresSlice.actions.gameStoresFetch());
      const response: IGameStoresResponse = await axios({
        url: `https://api.rawg.io/api/games/${gameId}/stores?key=${RAWG_API}`,
      });
      dispatch(
        gameStoresSlice.actions.gameStoresFetchSuccess(response.data.results),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(gameStoresSlice.actions.gameStoresFetchError(e.message));
      }
    }
  };

export const fetchGameScreenshots =
  (gameId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(gameScreenshotsSlice.actions.gameScreenshotsFetch());
      const response: IGameScreenshotsResponse = await axios({
        url: `https://api.rawg.io/api/games/${gameId}/screenshots?key=${RAWG_API}`,
      });
      dispatch(
        gameScreenshotsSlice.actions.gameScreenshotsFetchSuccess(
          response.data.results,
        ),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(
          gameScreenshotsSlice.actions.gameScreenshotsFetchError(e.message),
        );
      }
    }
  };
