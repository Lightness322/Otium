import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { fetchUser } from "../store/authenticationReducers/ActionCreatorsAuth";

import { LoaderType } from "../enums/enums";

import Loader from "../ui/Loader";
import Header from "../ui/Header";
import Container from "../ui/Container";
import WelcomeContent from "../ui/WelcomeContent";
import Modal from "../features/authentication/AuthModal";

const WelcomePage: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const { userId, status } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userId) dispatch(fetchUser());
  }, [dispatch, userId]);

  return (
    <div className="flex min-h-screen flex-col bg-secondary-color text-font-primary-color">
      <Header />
      <Container>
        {status === "pending" ? (
          <Loader type={LoaderType.big} />
        ) : (
          <WelcomeContent userId={userId} setIsModalActive={setIsModalActive} />
        )}
      </Container>
      <Modal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </div>
  );
};

export default WelcomePage;
