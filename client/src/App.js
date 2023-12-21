import "./app.css";
import React from "react";
import SignUp from "./pages/signUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeStore } from "./store/themeStore";
import { pageTheme } from "./component/Theme/themes";
import { CircularProgress, Container } from "@mui/material";
import HomeBody from "./pages/HomePage/homeBody";
import SignIn from "./pages/signIn";
import NotificationForm from "./pages/Notifications/NotificationForm";
import Layout from "./pages/Layout";
import instance from "./axios";
import { useEffect, useState } from "react";
import AuthenticatedRoute from "./component/authenticatedRoute";
import { UserIdStore } from "./store/userStore";
import UserProfile from "./pages/profile/userProfile";
import { DivMain, ProfileLoadingDiv } from "./component/div";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = UserIdStore((state) => state.setUser);
  const userProfile = UserIdStore((state) => state.userProfile);
  const theme = ThemeStore((state) => state.theme);
  const buttonTheme = ThemeStore((state) => state.buttonTheme);
  const storageData = ThemeStore((state) => state.getFromLocalStorage);

  const mainTheme = {
    theme: pageTheme[theme],
    buttonTheme: pageTheme[buttonTheme],
  };
  useEffect(() => {
    const fetchUserHandler = async () => {
      try {
        setIsLoading(true);
        storageData();

        const res = await instance.get("user/getMe");
        const data = await res.data.data;

        setUser(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchUserHandler();
  }, []);
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <DivMain>
          <Container>
            {isLoading ? (
              <ProfileLoadingDiv>
                <CircularProgress size={80} />
              </ProfileLoadingDiv>
            ) : (
              <Routes>
                {!userProfile.userName ? (
                  <>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                  </>
                ) : null}
                <Route
                  element={
                    <AuthenticatedRoute>
                      <Layout />
                    </AuthenticatedRoute>
                  }
                >
                  <Route
                    index={true}
                    path="/"
                    element={
                      <AuthenticatedRoute>
                        <HomeBody />
                      </AuthenticatedRoute>
                    }
                  />
                  <Route
                    path="/Notification"
                    element={
                      <AuthenticatedRoute>
                        <NotificationForm />
                      </AuthenticatedRoute>
                    }
                  />
                  <Route
                    path="/Profile/:username"
                    element={
                      <AuthenticatedRoute>
                        <UserProfile />
                      </AuthenticatedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Route>
              </Routes>
            )}
          </Container>
        </DivMain>
      </ThemeProvider>
    </>
  );
}

export default App;
