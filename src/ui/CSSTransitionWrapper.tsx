import { CSSTransition } from "react-transition-group";

interface ICSSTransitionWrapperProps {
  children: React.JSX.Element | React.JSX.Element[];
  isShow: boolean;
}

const CSSTransitionWrapper: React.FC<ICSSTransitionWrapperProps> = ({
  isShow,
  children,
}) => {
  return (
    <CSSTransition
      classNames={{
        enter: "opacity-0",
        enterActive: "transition-opacity duration-500 opacity-100",
        exitActive: "transition-opacity duration-500 opacity-0",
      }}
      timeout={500}
      in={isShow}
      mountOnEnter
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default CSSTransitionWrapper;
