interface IMovieDescriptionProps {
  description: string;
}

const MovieDescription: React.FC<IMovieDescriptionProps> = ({
  description,
}) => {
  return (
    <div>
      {description && (
        <>
          <div className="mb-4 text-2xl font-medium">Описание</div>
          <div>{description}</div>
        </>
      )}
    </div>
  );
};

export default MovieDescription;
