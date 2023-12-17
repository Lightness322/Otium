import { usePersonDetails } from "./usePersonDetails.ts";

import { LoaderType } from "../../enums/enums.ts";

import Loader from "../../ui/Loader.tsx";
import ErrorMessage from "../../ui/ErrorMessage.tsx";
import PersonInfo from "./PersonInfo";
import MovieItemsOfPerson from "./MovieItemsOfPerson.tsx";

const PersonDetails: React.FC = () => {
  const { personDetails, moviesDirector, moviesActor, isLoading, error } =
    usePersonDetails();

  const { posterUrl } = personDetails;

  if (isLoading || Object.keys(personDetails).length === 0)
    return <Loader type={LoaderType.big} />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <div className="flex flex-col gap-y-3">
      <div className="grid grid-cols-[250px,_1fr] gap-x-10 max-md:grid-cols-[200px,_1fr] max-md:gap-x-5 max-[550px]:grid-cols-[1fr,_160px] max-[470px]:flex max-[470px]:flex-col max-[470px]:gap-y-5">
        <img
          className="max-[550px]:order-2 max-[470px]:mx-auto max-[470px]:w-full max-[470px]:max-w-[250px]"
          src={`${posterUrl}`}
        />
        <PersonInfo person={personDetails} />
      </div>
      <MovieItemsOfPerson movies={moviesDirector} title="Режиссер" />
      <MovieItemsOfPerson movies={moviesActor} title="Актер" />
    </div>
  );
};

export default PersonDetails;
