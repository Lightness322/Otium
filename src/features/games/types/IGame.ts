interface IGameGenre {
  id: number;
  name: string;
  slug: string;
}

interface IPlatformObj {
  platform: IPlatform;
}

interface IPlatform {
  id: number;
  name: string;
}

interface ITag {
  slug: string;
}

export interface IGame {
  rating: number;
  added: number;
  id: number;
  background_image: string;
  genres: IGameGenre[];
  metacritic: number;
  name: string;
  platforms: IPlatformObj[];
  released: string;
  description_raw: string;
  tags: ITag[];
}
