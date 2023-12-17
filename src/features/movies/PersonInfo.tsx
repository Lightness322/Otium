import { dateTransform } from "../../utils/helpers";

import { IStaffPersonDetails } from "./types/IStaffPersonDetails";

import MovieName from "./MovieName";
import Parameter from "../../ui/Parameter";

interface IPersonInfoProps {
  person: IStaffPersonDetails;
}

const PersonInfo: React.FC<IPersonInfoProps> = ({ person }) => {
  const { nameEn, nameRu, age, birthday, birthplace, profession } = person;

  const date = dateTransform(birthday);

  return (
    <div>
      <MovieName nameOriginal={nameEn} nameRu={nameRu} />
      <hr className="my-4 h-[1px] bg-font-primary-color" />
      <div className="flex flex-col gap-y-1">
        <Parameter
          className="max-[650px]:flex max-[650px]:flex-col max-[650px]:items-start"
          name="Деятельность"
          parameter={profession}
        />
        <Parameter
          className="max-[650px]:flex max-[650px]:flex-col max-[650px]:items-start"
          name="Возраст"
          parameter={age}
        />
        <Parameter
          className="max-[650px]:flex max-[650px]:flex-col max-[650px]:items-start"
          name="День рождения"
          parameter={date}
        />
        <Parameter
          className="max-[650px]:flex max-[650px]:flex-col max-[650px]:items-start"
          name={"Место рождения"}
          parameter={birthplace}
        />
      </div>
    </div>
  );
};

export default PersonInfo;
