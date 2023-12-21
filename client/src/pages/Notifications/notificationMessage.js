import React from "react";
import { NotificationIMG } from "../../component/img";
import { NotificationMessageDiv } from "../../component/div";
import { NotificationP } from "../../component/p";
const NotificationMessage = ({ text, pImg, name, tweet }) => {
  return (
    <>
      <NotificationMessageDiv>
        <NotificationIMG src={pImg} />
        <NotificationP>
          {text} <strong>{name}</strong>
        </NotificationP>
        <NotificationP tweet="true">{tweet}</NotificationP>
      </NotificationMessageDiv>
    </>
  );
};
export default NotificationMessage;
