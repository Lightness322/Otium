import { FaCircleArrowDown } from "react-icons/fa6";

interface IGameDetailsShowItemsProps {
  title: string;
  isShow: boolean;
  handleShow: () => void;
}

const GameDetailsShowItems: React.FC<IGameDetailsShowItemsProps> = ({
  isShow,
  handleShow,
  title,
}) => {
  return (
    <button
      className="flex w-max items-center gap-x-2 rounded-xl p-2 text-xl hover:bg-[#3c3c3c]"
      onClick={handleShow}
    >
      <span className="max-[603px]:text-lg">{title}</span>
      <span
        className={`${
          isShow ? "rotate-180" : ""
        } transition-transform duration-500`}
      >
        <FaCircleArrowDown />
      </span>
    </button>
  );
};

export default GameDetailsShowItems;
