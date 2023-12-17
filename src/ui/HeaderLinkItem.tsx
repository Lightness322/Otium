import { NavLink } from "react-router-dom";

interface IHeaderLinkItemProps {
  to: string;
  children: React.JSX.Element;
  prevent?: boolean;
}

const HeaderLinkItem: React.FC<IHeaderLinkItemProps> = ({
  to,
  children,
  prevent,
}) => {
  return (
    <li>
      <NavLink
        className={`relative text-xl font-bold text-font-secondary-color before:absolute before:bottom-[-2px] before:h-[2px] before:bg-font-primary-color hover:text-font-primary-color aria-[current=page]:text-font-primary-color aria-[current=page]:before:w-full aria-[current=page]:before:animate-expand`}
        to={`${to}`}
        onClick={(e) => {
          prevent && e.preventDefault();
        }}
      >
        <span>{children}</span>
      </NavLink>
    </li>
  );
};

export default HeaderLinkItem;
