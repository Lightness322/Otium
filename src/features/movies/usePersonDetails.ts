import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { fetchPersonDetails } from "../../store/moviesReducers/ActionCreatorsMovies";

export function usePersonDetails() {
  const { personId } = useParams();

  const { personDetails, isLoading, error } = useAppSelector(
    (state) => state.personDetailsReducer,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPersonDetails(personId));
  }, [dispatch, personId]);

  const { films: allMovies } = personDetails;

  const moviesDirector = allMovies?.filter(
    (movie) => movie.professionKey === "DIRECTOR",
  );

  const moviesActor = allMovies?.filter(
    (movie) => movie.professionKey === "ACTOR",
  );

  return { personDetails, moviesDirector, moviesActor, isLoading, error };
}
