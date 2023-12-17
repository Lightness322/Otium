import { addPointZero, addSpacesToNumber } from "../utils/moviesHelpers";

interface IRatingWithVotesProps {
  rating: number | null;
  votes: number | null;
  service: string;
  color: string;
}

const RatingWithVotes: React.FC<IRatingWithVotesProps> = ({
  rating,
  votes,
  service,
  color,
}) => {
  const votesWithSpaces = addSpacesToNumber(votes);

  return (
    <div>
      <div className="flex items-center gap-x-1">
        {color === "yellow" && (
          <span className="font-medium text-yellow">{service}: </span>
        )}
        {color === "orange" && (
          <span className="font-medium text-orange">{service}: </span>
        )}
        <span className="font-numbers text-xl font-semibold">
          {rating ? (
            addPointZero(rating)
          ) : (
            <span className="block translate-y-[2px]">&mdash;</span>
          )}
        </span>
      </div>
      <div className="font-medium text-font-secondary-color">
        {votesWithSpaces ? votesWithSpaces : "слишком мало"} оценок
      </div>
    </div>
  );
};

export default RatingWithVotes;
