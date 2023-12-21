import { useState } from "react";
import { ThemeStore } from "../../store/themeStore";
import { BiCircle } from "react-icons/bi";
import { P2 } from "../../component/p";
import { ButtonsDiv } from "../../component/div";
import { DarkButton, DimButton, LightButton } from "../../component/button";
const ThemesButton = () => {
  const changeTheme = ThemeStore((state) => state.changeTheme);
  const Theme = ThemeStore((state) => state.theme);
  const [activeB, setActiveB] = useState(Theme);
  const handleClickButton = (theme) => {
    changeTheme(theme);
    setActiveB(theme);
    localStorage.setItem("ThemeData", theme);
  };
  return (
    <>
      <P2>Background</P2>
      <ButtonsDiv>
        <LightButton
          onClick={() => handleClickButton("Light")}
          active={activeB === "Light" ? "true" : undefined}
        >
          <BiCircle size={15} />
          Light
        </LightButton>
        <DimButton
          onClick={() => handleClickButton("Dim")}
          active={activeB === "Dim" ? "true" : undefined}
        >
          <BiCircle size={15} />
          Dim
        </DimButton>
        <DarkButton
          onClick={() => handleClickButton("Dark")}
          active={activeB === "Dark" ? "true" : undefined}
        >
          <BiCircle size={15} />
          Dark
        </DarkButton>
      </ButtonsDiv>
    </>
  );
};

export default ThemesButton;
