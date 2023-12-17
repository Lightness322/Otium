import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import {
  deleteViewedMovie,
  insertViewedMovie,
} from "../../store/moviesReducers/ActionCreatotsViewedMovies";

export function useUpdateViewedMovies(movieId: number) {
  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const { viewedMoviesIds, isLoading: isViewedLoading } = useAppSelector(
    (state) => state.viewedMoviesReducer,
  );

  const dispatch = useAppDispatch();

  const isViewed = !!viewedMoviesIds.find((viewedId) => viewedId === movieId);

  function handleViewedMoviesUpdate() {
    if (isViewed) {
      dispatch(
        deleteViewedMovie({ viewedMoviesIds, movieId, userId: userId! }),
      );
    } else {
      dispatch(
        insertViewedMovie({ viewedMoviesIds, movieId, userId: userId! }),
      );
    }
  }

  return {
    isViewed,
    isViewedLoading,
    handleViewedMoviesUpdate,
  };
}
