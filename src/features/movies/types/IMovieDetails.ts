import { IMovie } from "./IMovie";

export interface IMovieDetails extends IMovie {
  description: string;
  ratingKinopoiskVoteCount: number | null;
  ratingImdbVoteCount: number | null;
  filmLength: number;
  slogan: string;
}
