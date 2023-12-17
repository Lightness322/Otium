import { useState } from "react";

import Container from "./Container";
import Logo from "./Logo";
import HeaderLinkItems from "./HeaderLinkItems";
import HeaderButtons from "./HeaderButtons";
import Modal from "../features/authentication/AuthModal";

const Header: React.FC = function () {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <div className="font-font-menu fixed z-20 w-full bg-primary-color [border-bottom:_1px_solid_#000]">
      <Container isHeader={true}>
        <div className="flex items-center justify-between">
          <Logo />
          <HeaderLinkItems />
          <HeaderButtons setIsModalActive={setIsModalActive} />
        </div>
      </Container>
      <Modal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </div>
  );
};

export default Header;
