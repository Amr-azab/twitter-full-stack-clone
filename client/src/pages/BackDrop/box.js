import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "../../component/div";
import { H22, H44 } from "../../component/H";
import ButtonsColor from "./buttonColor";
import ThemesButton from "./ThemeButton";
import { DoneButtons } from "../../component/button";

// import CatIcon from "../icons/cat.svg";
const ModelBox = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <H22>Customize your view</H22>
          <H44>
            Display settings affect all of your Twitter accounts on this
            browser. These settings are only visible to you.
          </H44>
          <ButtonsColor />
          <ThemesButton />
          <DoneButtons onClick={handleClose}>Done</DoneButtons>
        </Box>
      </Modal>
    </>
  );
};
export default ModelBox;
