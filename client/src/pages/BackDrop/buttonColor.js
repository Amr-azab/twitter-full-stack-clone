import React from "react";
import { ThemeStore } from "../../store/themeStore";
import { useState } from "react";
import {
  BlueButton,
  GreenButton,
  OrangeButton,
  PurpleButton,
  RedButton,
  YellowButton,
} from "../../component/button";
import { P2 } from "../../component/p";
import { ColoredButtonsDiv, ButtonContainer } from "../../component/div";
import { FiCheck } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSun,
  faMoon,
  faCar,
  faShip,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ButtonsColor = () => {
  const changeButtonColor = ThemeStore((state) => state.changeButtonTheme);
  const ButtonColor = ThemeStore((state) => state.buttonTheme);
  const [checked, setChecked] = useState(ButtonColor);
  const handleClickButton = (theme) => {
    changeButtonColor(theme);
    setChecked(theme);
    localStorage.setItem("ButtonThemeData", theme);
  };
  return (
    <>
      <P2>Buttons Color</P2>
      <ColoredButtonsDiv>
        <ButtonContainer>
          <BlueButton onClick={() => handleClickButton("blue")}>
            {checked === "blue" && <FiCheck size={20} />}
          </BlueButton>
          <div>
            <FontAwesomeIcon icon={faShip} style={{ color: "#1DA1F2" }} />
          </div>
        </ButtonContainer>
        <ButtonContainer>
          <YellowButton onClick={() => handleClickButton("yellow")}>
            {checked === "yellow" && <FiCheck size={20} />}
          </YellowButton>
          <div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFAC33" }} />
          </div>
        </ButtonContainer>
        <ButtonContainer>
          <RedButton onClick={() => handleClickButton("red")}>
            {checked === "red" && <FiCheck size={20} />}
          </RedButton>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#e0144c" }} />
          </div>
        </ButtonContainer>
        <ButtonContainer>
          <PurpleButton onClick={() => handleClickButton("purple")}>
            {checked === "purple" && <FiCheck size={20} />}
          </PurpleButton>
          <div>
            <FontAwesomeIcon icon={faMoon} style={{ color: "#794BC4" }} />
          </div>
        </ButtonContainer>
        <ButtonContainer>
          <OrangeButton onClick={() => handleClickButton("orange")}>
            {checked === "orange" && <FiCheck size={20} />}
          </OrangeButton>
          <div>
            <FontAwesomeIcon icon={faSun} style={{ color: "#F86F03" }} />
          </div>
        </ButtonContainer>
        <ButtonContainer>
          <GreenButton onClick={() => handleClickButton("green")}>
            {checked === "green" && <FiCheck size={20} />}
          </GreenButton>
          <div>
            <FontAwesomeIcon icon={faCar} style={{ color: "#17BF63" }} />
          </div>
        </ButtonContainer>
      </ColoredButtonsDiv>
    </>
  );
};

export default ButtonsColor;
