import React from "react";
import { CoverDiv } from "../../component/div";
import { CoverImg, DivPhoto, Img } from "../../component/img";
const Cover = ({ profileImage, coverImage }) => {
  return (
    <>
      <CoverDiv>
        <CoverImg alt="CoverImg" src={coverImage} />
        <DivPhoto>
          <Img src={profileImage} alt="user" />
        </DivPhoto>
      </CoverDiv>
    </>
  );
};

export default Cover;
