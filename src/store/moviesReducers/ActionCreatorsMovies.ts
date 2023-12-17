import axios from "axios";

import { AppDispatch } from "../store";
import { moviesSlice } from "./MoviesSlice";
import { movieDetailsSlice } from "./MovieDetailsSlice";
import { movieStaffSlice } from "./MovieStaffSlice";
import { personDetailsSlice } from "./PersonDetailsSlice";

import { IStaffPersonDetails } from "../../features/movies/types/IStaffPersonDetails";
import { IMovieDetails } from "../../features/movies/types/IMovieDetails";
import { IStaffPerson } from "../../features/movies/types/IStaffPerson";
import { IMovie } from "../../features/movies/types/IMovie";

import { KINOPOISK_API } from "../../data/apiKeys";

interface IMoviesResponse {
  data: {
    items: IMovie[];
    total: number;
    totalPages: number;
  };
}

interface IMovieDetailsResponse {
  data: IMovieDetails;
}

interface IMovieStaffResponse {
  data: IStaffPerson[];
}

interface IPersonDetailsResponse {
  data: IStaffPersonDetails;
}

interface IFetchMoviesArguments {
  countryId: string | null;
  genreId: string | null;
  ratingFrom: string | null;
  ratingTo: string | null;
  yearFrom: string | null;
  yearTo: string | null;
  keyword: string | null;
  page: string | null;
  type: string | null;
  order: string | null;
  isShortMoviesIncluded: boolean;
}

export const fetchMovies =
  ({
    countryId,
    genreId,
    ratingFrom,
    ratingTo,
    yearFrom,
    yearTo,
    keyword,
    page,
    type,
    order,
    isShortMoviesIncluded,
  }: IFetchMoviesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(moviesSlice.actions.moviesFetch());

      const response: IMoviesResponse = await axios({
        url: `https://kinopoiskapiunofficial.tech/api/v2.2/films?${
          countryId ? `countries=${countryId}&` : ""
        }${genreId ? `genres=${genreId}&` : ""}${
          keyword ? `keyword=${keyword}&` : ""
        }${type ? `type=${type}&` : ""}${
          ratingFrom ? `ratingFrom=${ratingFrom}&` : ""
        }${ratingTo ? `ratingTo=${ratingTo}&` : ""}${
          yearFrom ? `yearFrom=${yearFrom}&` : ""
        }${yearTo ? `yearTo=${yearTo}&` : ""}&order=${order}&page=${page}`,
        method: "get",
        headers: {
          "X-API-KEY": `${KINOPOISK_API}`,
          "Content-Type": "application/json",
        },
      });

      const movies =
        +ratingFrom! >= 6
          ? response.data.items.filter(
              (movie) => movie.ratingKinopoisk !== null,
            )
          : response.data.items;

      const filteredMovies = isShortMoviesIncluded
        ? movies
        : movies.filter((movie) => {
            const totalGenres = movie.genres.length;
            for (let i = 0; i < totalGenres; i++) {
              if (movie.genres.at(i)?.genre === "короткометражка") return false;
            }
            return true;
          });

      dispatch(moviesSlice.actions.moviesSetCurrentPage(+page!));
      dispatch(
        moviesSlice.actions.moviesSetTotalPages(response.data.totalPages),
      );
      dispatch(moviesSlice.actions.moviesFetchSuccess(filteredMovies));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(moviesSlice.actions.moviesFetchError(e.message));
      }
    }
  };

export const fetchMovieDetails =
  (movieId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(movieDetailsSlice.actions.movieDetailsFetch());

      const response: IMovieDetailsResponse = await axios({
        url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`,
        method: "get",
        headers: {
          "X-API-KEY": `${KINOPOISK_API}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(
        movieDetailsSlice.actions.movieDetailsFetchSuccess(response.data),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(movieDetailsSlice.actions.movieDetailsFetchError(e.message));
      }
    }
  };

export const fetchMovieStaff =
  (movieId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(movieStaffSlice.actions.movieStaffFetch());

      const response: IMovieStaffResponse = await axios({
        url: `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`,
        method: "get",
        headers: {
          "X-API-KEY": `${KINOPOISK_API}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(movieStaffSlice.actions.movieStaffFetchSuccess(response.data));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(movieStaffSlice.actions.movieStaffFetchError(e.message));
      }
    }
  };

export const fetchPersonDetails =
  (personId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(personDetailsSlice.actions.personDetailsFetch());

      const response: IPersonDetailsResponse = await axios({
        url: `https://kinopoiskapiunofficial.tech/api/v1/staff/${personId}`,
        method: "get",
        headers: {
          "X-API-KEY": `${KINOPOISK_API}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(
        personDetailsSlice.actions.personDetailsFetchSuccess(response.data),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(personDetailsSlice.actions.personDetailsFetchError(e.message));
      }
    }
  };
