import Modal from "@mui/material/Modal";
import React from "react";
import { TweetImg } from "../../component/img";
const TweetPhoto = ({ open, photo, close }) => {
  return (
    <>
      <Modal open={open} onClose={close}>
        <TweetImg src={photo} />
      </Modal>
    </>
  );
};
export default TweetPhoto;
