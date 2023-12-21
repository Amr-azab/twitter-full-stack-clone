import React from "react";
import { Input } from "../component/input";
import { Div } from "../component/div";
import { H2, H22 } from "../component/H";
import { AiOutlineTwitter } from "react-icons/ai";
import { Button } from "../component/button";
import { useState } from "react";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
import { UserIdStore } from "../store/userStore";
import { ErrorMsg } from "../component/p";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const setUser = UserIdStore((state) => state.setUser);

  let data = {
    name: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const nameHandler = (e) => {
    setIsError(false);
    setName(e.target.value);
  };
  const userNameHandler = (e) => {
    setIsError(false);
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setIsError(false);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setIsError(false);
    setPassword(e.target.value);
  };
  const passwordConfirmHandler = (e) => {
    setIsError(false);
    setPasswordConfirm(e.target.value);
    data.confirmPassword = passwordConfirm;
  };
  const signupHandler = async () => {
    if (!email || !userName || !name || !password || !passwordConfirm) {
      setIsError(true);
      setErrorMessage("Please provide all the fields !");
      return;
    }
    try {
      data = {
        name,
        userName,
        email,
        password,
        passwordConfirm,
      };

      const res = await instance.post("user/signup", data);

      if (res.data.status === "success") {
        navigate("/", { replace: true });
      }
      const { user } = await res.data.data;
      setUser(user);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.response.data.message);
    }

    // console.log(Data);
  };

  return (
    <Div signup="true">
      <AiOutlineTwitter color="#1DA1F2" size={80} />
      <H22>Sign up to Twitter</H22>
      <Input placeholder="name" onChange={nameHandler} value={name} />
      <Input
        placeholder="username"
        onChange={userNameHandler}
        value={userName}
      />
      <Input
        placeholder="email"
        type="email"
        onChange={emailHandler}
        value={email}
      />
      <Input
        placeholder="password"
        type="password"
        onChange={passwordHandler}
        value={password}
      />
      <Input
        placeholder="confirm password"
        type="password"
        onChange={passwordConfirmHandler}
        value={passwordConfirm}
      />
      <Button onClick={signupHandler}>Sign up</Button>
      {isError && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </Div>
  );
};
export default SignUp;
