import { useNavigate } from "react-router";

import { IStaffPerson } from "./types/IStaffPerson";

interface IPersonItemProps {
  person: IStaffPerson;
}

const PersonItem: React.FC<IPersonItemProps> = ({ person }) => {
  const navigate = useNavigate();

  const { nameRu, description, posterUrl, staffId: personId } = person;

  return (
    <li
      className="flex flex-col items-center rounded-2xl p-3 text-center hover:cursor-pointer hover:bg-hover-color"
      onClick={() => navigate(`/movies/person/${personId}`)}
    >
      <img className="h-36" src={`${posterUrl}`} />
      <div className="text-sm font-medium">{nameRu}</div>
      {description && (
        <div className="text-sm text-font-secondary-color">{description}</div>
      )}
    </li>
  );
};

export default PersonItem;
