import React from "react";
import { SaveCancelDiv } from "../../component/div";
import { CancelButton, SaveButton } from "../../component/button";
const SaveCancelButtons = ({ cancelHandler, saveHandler }) => {
  return (
    <SaveCancelDiv>
      <CancelButton onClick={cancelHandler}>cancel</CancelButton>
      <SaveButton onClick={saveHandler}>save</SaveButton>
    </SaveCancelDiv>
  );
};

export default SaveCancelButtons;
