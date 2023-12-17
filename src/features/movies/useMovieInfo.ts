import { IMovieDetails } from "./types/IMovieDetails";
import { IStaffPerson } from "./types/IStaffPerson";

export function useMovieInfo(
  movieDetails: IMovieDetails,
  directors: IStaffPerson[],
  writers: IStaffPerson[],
) {
  const { countries, genres } = movieDetails;

  const genresParameterName = genres?.length > 1 ? "Жанры" : "Жанр";

  const countriesParameterName = countries?.length > 1 ? "Страны" : "Страна";

  const directorsParameterName =
    directors.length > 1 ? "Режиссеры" : "Режиссер";

  const writersParameterName = writers.length > 1 ? "Сценаристы" : "Сценарист";

  const directorsParameter = directors
    .map((director) => (director.nameRu ? director.nameRu : director.nameEn))
    .slice(0, 4)
    .join(", ");

  const writersParameter = writers
    .map((writer) => (writer.nameRu ? writer.nameRu : writer.nameEn))
    .slice(0, 4)
    .join(", ");

  return {
    genresParameterName,
    countriesParameterName,
    directorsParameterName,
    writersParameterName,
    directorsParameter,
    writersParameter,
  };
}
