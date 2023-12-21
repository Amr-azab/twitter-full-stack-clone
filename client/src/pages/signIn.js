import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { Div } from "../component/div";
import { H22 } from "../component/H";
import { ErrorMsg, P } from "../component/p";
import { Input } from "../component/input";
import { Button } from "../component/button";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import { UserIdStore } from "../store/userStore";
import { SignUpLINK } from "../component/link";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email: "", password: "" };
  const [isError, setIsError] = useState(false);
  const setUser = UserIdStore((state) => state.setUser);
  const [errorMessage, setErrorMessage] = useState();

  const emailHandler = (e) => {
    setIsError(false);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setIsError(false);
    setPassword(e.target.value);
  };
  const signInHandler = async () => {
    if (!email || !password) {
      setIsError(true);
      setErrorMessage("Please provide email or password !");
      return;
    }

    try {
      // Assign email and password to the data object
      //This is presumably used for sending login data to the server.
      data.email = email;
      data.password = password;
      // Send a POST request to the server endpoint "user/login" with the provided data
      //The res variable holds the response from the server.
      const res = await instance.post("user/login", data);
      // If the response status is "success", navigate to the home page ("/") and update the user state
      //replace the current history state. This might be used for redirecting the user after a successful login.
      if (res.data.status === "success") {
        navigate("/", { replace: true });
      }
      // Extract the user data from the response and update the user state with it
      const { user } = await res.data.data;
      setUser(user);
    } catch (err) {
      // If there's an error, set isError to true and display the error message from the response
      setIsError(true);
      setErrorMessage(err.response.data.message);
    }
  };
  return (
    <Div signin="true">
      <AiOutlineTwitter color="#1DA1F2" size={100} />
      <H22>Log in to Twitter</H22>
      <Input
        placeholder="e-mail"
        required
        type="email"
        onChange={emailHandler}
        value={email}
      />
      <Input
        placeholder="password"
        required
        type="password"
        onChange={passwordHandler}
        value={password}
      />
      {isError && <ErrorMsg>{errorMessage}</ErrorMsg>}
      <Button onClick={signInHandler}>Login</Button>
      <P>
        Do not have account <SignUpLINK to={"/signUp"}>signup now ?</SignUpLINK>
      </P>
    </Div>
  );
};

export default SignIn;
