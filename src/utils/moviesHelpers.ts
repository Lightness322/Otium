import { IMovieOfPerson } from "../features/movies/types/IStaffPersonDetails";

export function addSpacesToNumber(number: number | null): string {
  return number ? number.toLocaleString() : "";
}

export function sortPersonMoviesByRating(
  movies: IMovieOfPerson[],
): IMovieOfPerson[] {
  movies.forEach((_, i, movies) => {
    if (i < movies.length - 1 && movies[i].filmId === movies[i + 1].filmId) {
      movies.splice(i, 1);
    }
  });

  return movies.sort((a, b) => {
    if (+a.rating! < +b.rating!) return 1;
    else return -1;
  });
}

export function addPointZero(number: number): string {
  if (String(number).length === 1) return number + ".0";
  else return String(number);
}

export function formatFilmLength(filmLengthMinutes: number): string {
  const hours = Math.floor(filmLengthMinutes / 60);
  const minutes = filmLengthMinutes - hours * 60;

  const hoursString =
    hours.toString().length === 2 ? hours.toString() : "0" + hours.toString();

  const minutesString =
    minutes.toString().length === 2
      ? minutes.toString()
      : "0" + minutes.toString();

  return `${hoursString}:${minutesString} / ${filmLengthMinutes} мин`;
}
