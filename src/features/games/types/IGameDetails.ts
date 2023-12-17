import { IGame } from "./IGame";

interface IDeveloper {
  id: number;
  name: string;
}

export interface IGameDetails extends IGame {
  developers: IDeveloper[];
}
