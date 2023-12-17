import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { fetchUser } from "../../store/authenticationReducers/ActionCreatorsAuth";

interface IProtectedRouteProps {
  children: React.JSX.Element;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId, status } = useAppSelector((state) => state.userSliceReducer);

  useEffect(() => {
    if (!userId) dispatch(fetchUser());
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userId && status === "complete") {
      navigate("/");
    }
  }, [status, navigate, userId]);

  if (userId) return children;
};

export default ProtectedRoute;
