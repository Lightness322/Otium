import { IStaffPerson } from "./types/IStaffPerson";

import PersonItem from "./PersonItem";

interface IPersonItemsProps {
  persons: IStaffPerson[];
  title: string;
}

const PersonItems: React.FC<IPersonItemsProps> = ({ persons, title }) => {
  return (
    <>
      {persons.length > 0 && (
        <>
          <div className="text-2xl font-medium">{title}</div>
          <ul className="grid grid-cols-[repeat(auto-fill,_166px)] justify-between max-[1201px]:justify-evenly">
            {persons.map((person) => (
              <PersonItem key={person.staffId} person={person} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PersonItems;
