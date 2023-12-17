import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { fetchWishlistMovies } from "../store/wishlistReducers/ActionCreatorsWishlistMovies";
import { fetchViewedMovies } from "../store/moviesReducers/ActionCreatotsViewedMovies";
import { fetchPlayedGames } from "../store/gamesReducers/ActionCreatorsPlayedGames";
import { fetchWishlistGames } from "../store/wishlistReducers/ActionCreatorsWishlistGames";

import { Outlet } from "react-router";
import Header from "./Header";
import Container from "./Container";

export default function AppLayout() {
  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId !== null) {
      dispatch(fetchWishlistGames(userId));
      dispatch(fetchWishlistMovies(userId));
      dispatch(fetchViewedMovies(userId));
      dispatch(fetchPlayedGames(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="absolute z-50 flex min-h-screen w-full flex-col bg-secondary-color text-font-primary-color">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
