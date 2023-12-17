interface gameOrders {
  value: string;
  name: string;
}

export const gamesOrders: gameOrders[] = [
  {
    value: "-added",
    name: "Популярные",
  },
  {
    value: "-metacritic",
    name: "Рейтинг Metacritic",
  },
  {
    value: "-released",
    name: "Сначала новые",
  },
];
