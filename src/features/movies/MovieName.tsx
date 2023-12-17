interface IMovieNameProps {
  nameOriginal: string | null;
  nameRu: string | null;
}

const MovieName: React.FC<IMovieNameProps> = ({ nameOriginal, nameRu }) => {
  return (
    <div className="mb-6 max-md:mb-2">
      {nameOriginal && nameRu && (
        <>
          <div className="text-4xl font-semibold max-md:text-2xl">{nameRu}</div>
          <div className="text-lg text-font-secondary-color">
            {nameOriginal}
          </div>
        </>
      )}
      {!nameOriginal && nameRu && (
        <div className="text-4xl font-semibold max-md:text-2xl">{nameRu}</div>
      )}
      {nameOriginal && !nameRu && (
        <div className="text-4xl font-semibold max-md:text-2xl">
          {nameOriginal}
        </div>
      )}
    </div>
  );
};

export default MovieName;
