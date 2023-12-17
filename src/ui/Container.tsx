interface IContainer {
  children: JSX.Element | JSX.Element[];
  isHeader?: boolean;
}

const Container: React.FC<IContainer> = ({ children, isHeader = false }) => {
  return (
    <div
      className={`relative m-auto mb-0 w-full max-w-7xl grow p-5 ${
        !isHeader ? "mt-[70px]" : "mt-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
