export interface IWishlistMovie {
  created_at?: string;
  id?: number;
  kinopoiskId: number;
  nameOriginal: string | null;
  nameRu: string | null;
  userId: string;
  posterUrl: string;
  type: string;
  genres: string[];
}
