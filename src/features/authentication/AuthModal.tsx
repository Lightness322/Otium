import { Dispatch, SetStateAction, useState } from "react";

import AuthForm from "./AuthForm";

interface IAuthModalProps {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const AuthModal: React.FC<IAuthModalProps> = ({
  isModalActive,
  setIsModalActive,
}) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-[rgba(0,_0,_0,_0.5)] opacity-0 transition-all duration-300 ${
        isModalActive ? "pointer-events-auto opacity-100" : ""
      }`}
      onClick={() => {
        setIsModalActive((isActive) => !isActive);
        setIsRegister(false);
      }}
    >
      <AuthForm
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </div>
  );
};

export default AuthModal;
