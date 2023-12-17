export interface IWishlistGame {
  created_at?: string;
  id?: number;
  gameId: number;
  name: string | null;
  userId: string;
  posterUrl: string;
  genres: string[];
}
