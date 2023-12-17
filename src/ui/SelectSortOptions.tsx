interface ISortOption {
  value: string;
  name: string;
}

interface ISelectSortOptionsProps {
  options: ISortOption[];
}

const SelectSortOptions: React.FC<ISelectSortOptionsProps> = ({ options }) => {
  return (
    <>
      {options.map((gameOrderObj) => (
        <option key={gameOrderObj.value}>{gameOrderObj.name}</option>
      ))}
    </>
  );
};

export default SelectSortOptions;
