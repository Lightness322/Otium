import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PersonPage from "./pages/PersonPage";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import GamesPage from "./pages/GamesPage";
import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/WelcomePage";
import GameDetails from "./features/games/GameDetails";
import DeveloperPage from "./pages/DeveloperPage";
import { WishlistMovies } from "./features/list/WishlistMovies";
import WishlistGames from "./features/list/WishlistGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:movieId", element: <MovieDetailsPage /> },
      { path: "movies/person/:personId", element: <PersonPage /> },
      { path: "games", element: <GamesPage /> },
      {
        path: "games/:gameId",
        element: <GameDetails />,
      },
      { path: "games/developer/:developerId", element: <DeveloperPage /> },
      { path: "list/movies", element: <WishlistMovies /> },
      { path: "list/games", element: <WishlistGames /> },
    ],
  },
  { path: "", element: <WelcomePage />, index: true },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
