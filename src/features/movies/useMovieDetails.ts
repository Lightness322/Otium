import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import {
  fetchMovieDetails,
  fetchMovieStaff,
} from "../../store/moviesReducers/ActionCreatorsMovies";

export function useMovieDetails() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { movieId } = useParams();

  const {
    movieDetails,
    error: movieError,
    isLoading: isMovieLoading,
  } = useAppSelector((state) => state.movieDetailsReducer);

  const {
    movieStaff,
    error: staffError,
    isLoading: isStaffLoading,
  } = useAppSelector((state) => state.movieStaffReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchMovieStaff(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    if (isMovieLoading || isStaffLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isMovieLoading, isStaffLoading]);

  const directors = movieStaff
    .filter((person) => person.professionKey === "DIRECTOR")
    .slice(0, 16);

  const actors = movieStaff
    .filter((person) => person.professionKey === "ACTOR")
    .slice(0, 16);

  const writers = movieStaff.filter(
    (person) => person.professionKey === "DIRECTOR",
  );

  const errorMessagesArray = [staffError, movieError].filter(
    (errorMessage) => errorMessage !== "",
  );

  const errorMessage =
    errorMessagesArray.length > 0 ? errorMessagesArray.join("\n") : "";

  return { movieDetails, directors, actors, writers, isLoading, errorMessage };
}
