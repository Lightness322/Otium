export interface IMovieOfPerson {
  filmId: number;
  nameRu: string | null;
  nameEn: string | null;
  rating: string | null;
  professionKey: string;
}

export interface IStaffPersonDetails {
  personId: number;
  nameRu: string | null;
  nameEn: string | null;
  posterUrl: string;
  birthday: string;
  birthplace: string;
  age: number;
  films: IMovieOfPerson[];
  profession: string;
}
