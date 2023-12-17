interface IGameRatingProps {
  rating: number;
}

export const GameRating: React.FC<IGameRatingProps> = ({ rating }) => {
  return (
    <>
      {rating >= 80 && (
        <div
          className={`absolute bottom-0 right-0 border-[1px] border-solid bg-[#00ce7a] px-[6px] py-1 font-numbers font-bold text-black`}
        >
          {rating}
        </div>
      )}
      {rating >= 50 && rating <= 79 && (
        <div
          className={`absolute bottom-0 right-0 border-[1px] border-solid bg-[#ffbd3f] px-[6px] py-1 font-numbers font-bold text-black`}
        >
          {rating}
        </div>
      )}
      {rating >= 1 && rating <= 49 && (
        <div
          className={`absolute bottom-0 right-0 border-[1px] border-solid bg-[#ff6874] px-[6px] py-1 font-numbers font-bold text-black`}
        >
          {rating}
        </div>
      )}
    </>
  );
};
