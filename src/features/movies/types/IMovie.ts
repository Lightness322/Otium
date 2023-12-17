export interface IGenre {
  genre: string;
}

export interface ICountry {
  country: string;
}

export interface IMovie {
  kinopoiskId: number;
  nameOriginal: string | null;
  nameRu: string | null;
  type: string;
  year: number;
  countries: ICountry[];
  genres: IGenre[];
  ratingImdb: number | null;
  ratingKinopoisk: number | null;
  posterUrl: string;
  posterUrlPreview: string;
}
