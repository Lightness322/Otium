interface IMovieItemYearProps {
  year: number;
  isHover: boolean;
}

const MovieItemYear: React.FC<IMovieItemYearProps> = ({ year, isHover }) => {
  return (
    <>
      {isHover && (
        <>
          <div className="absolute bottom-0 left-0 z-10 w-full text-center text-lg text-white">
            {year}
          </div>
        </>
      )}
    </>
  );
};

export default MovieItemYear;
