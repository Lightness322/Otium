interface IItemsProps {
  children: React.JSX.Element | React.JSX.Element[];
  itemWidth: string;
}

const Items: React.FC<IItemsProps> = ({ children, itemWidth }) => {
  return (
    <div
      className={`grid auto-cols-max grid-cols-[repeat(auto-fill,_${itemWidth})] justify-between`}
    >
      {children}
    </div>
  );
};

export default Items;
