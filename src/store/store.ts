import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieStaffReducer from "./moviesReducers/MovieStaffSlice";
import moviesReducer from "./moviesReducers/MoviesSlice";
import movieDetailsReducer from "./moviesReducers/MovieDetailsSlice";
import personDetailsReducer from "./moviesReducers/PersonDetailsSlice";
import wishlistMoviesReducer from "./wishlistReducers/WishlistMoviesSlice";
import userSliceReducer from "./authenticationReducers/UserSlice";
import viewedMoviesReducer from "./moviesReducers/ViewedMoviesSlice";
import gamesReducer from "./gamesReducers/GamesSlice";
import playedGamesReducer from "./gamesReducers/PlayedGamesSlice";
import wishlistGamesReducer from "./wishlistReducers/WishlistGamesSlice";
import gameDetailsReducer from "./gamesReducers/GameDetailsSlice";
import gamesPartOfSeriesReducer from "./gamesReducers/GamesPartOfSeriesSlice";
import gameStoresReducer from "./gamesReducers/GameStoresSlice";
import developerGamesReducer from "./gamesReducers/DeveloperGamesSlice";
import gameScreenshotsReducer from "./gamesReducers/GamesScreenshotsSlice";

const rootReducer = combineReducers({
  moviesReducer,
  movieDetailsReducer,
  movieStaffReducer,
  personDetailsReducer,
  wishlistMoviesReducer,
  userSliceReducer,
  viewedMoviesReducer,
  gamesReducer,
  playedGamesReducer,
  wishlistGamesReducer,
  gameDetailsReducer,
  gamesPartOfSeriesReducer,
  gameStoresReducer,
  developerGamesReducer,
  gameScreenshotsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
