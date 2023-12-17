import { IGameStore } from "../features/games/types/IGameStore";

interface IGameStoreLinkProps {
  children: React.JSX.Element;
  gameStores: IGameStore[];
  storeId: number;
}

const GameStoreLink: React.FC<IGameStoreLinkProps> = ({
  gameStores,
  children,
  storeId,
}) => {
  const gameStoresIds = gameStores.map((gameStore) => gameStore.store_id);

  return (
    <>
      {gameStoresIds.includes(storeId) && (
        <a
          href={`${
            gameStores
              .filter((gameStore) => gameStore.store_id === storeId)
              .at(0)!.url
          }`}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default GameStoreLink;
