import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router";

import {
  fetchGameDetails,
  fetchGameScreenshots,
  fetchGameStores,
  fetchGamesPartOfSeries,
} from "../../store/gamesReducers/ActionCreatorsGames";

export function useGameDetails() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { gameId } = useParams();

  const {
    gameDetails,
    error: detailsError,
    isLoading: isDetailsLoading,
  } = useAppSelector((state) => state.gameDetailsReducer);

  const {
    gameStores,
    error: storesError,
    isLoading: isStoresLoading,
  } = useAppSelector((state) => state.gameStoresReducer);

  const {
    gamesPartOfSeries,
    error: errorSeries,
    isLoading: isSeriesLoading,
  } = useAppSelector((state) => state.gamesPartOfSeriesReducer);

  const {
    gameScreenshots,
    error: screenshotsError,
    isLoading: isScreenshotsLoading,
  } = useAppSelector((state) => state.gameScreenshotsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      isDetailsLoading ||
      isStoresLoading ||
      isSeriesLoading ||
      isScreenshotsLoading
    ) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [
    isDetailsLoading,
    isScreenshotsLoading,
    isSeriesLoading,
    isStoresLoading,
  ]);

  useEffect(() => {
    dispatch(fetchGameDetails(gameId));
    dispatch(fetchGamesPartOfSeries(gameId));
    dispatch(fetchGameStores(gameId));
    dispatch(fetchGameScreenshots(gameId));
  }, [dispatch, gameId]);

  const errorMessagesArray = [
    detailsError,
    storesError,
    errorSeries,
    screenshotsError,
  ].filter((errorMessage) => errorMessage !== "");

  const errorMessage =
    errorMessagesArray.length > 0 ? errorMessagesArray.join("\n") : "";

  return {
    gameDetails,
    gameStores,
    gamesPartOfSeries,
    gameScreenshots,
    isLoading,
    errorMessage,
  };
}
