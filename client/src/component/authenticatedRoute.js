import React from "react";
import { Navigate } from "react-router-dom";
import { UserIdStore } from "../store/userStore";

const AuthenticatedRoute = ({ children }) => {
  const user = UserIdStore((state) => state.userProfile);
  if (!user._id) {
    return <Navigate to="/signIn" />;
  }
  return children;
};
export default AuthenticatedRoute;
