import React, { useState } from "react";
import {
  BsPencilSquare,
  BsBoxArrowUpRight,
  BsFolder2,
  BsQuestionCircle,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { DivDisplay, MainDiv } from "../../component/div";
import Display from "./display";
import { NavDisplayUL } from "../../component/UI";
import { DisplayButton } from "../../component/button";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import { UserIdStore } from "../../store/userStore";
import ModelBox from "../BackDrop/box";
const MoreForm = ({ showDisplayOptions }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const setUser = UserIdStore((state) => state.setUser);
  const logOutHandler = async () => {
    try {
      const res = await instance.get("user/signout");
      if (res.data.status === "success") {
        setUser("");
        navigate("/signIn", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MainDiv>
      <Display showDisplayOptions={showDisplayOptions}></Display>
      <DivDisplay>
        <NavDisplayUL>
          <li>
            <DisplayButton>
              <BsFolder2 size={20} />
              <p>Topics</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton>
              <BsQuestionCircle size={20} />
              <p>Help Center</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton>
              <BsBoxArrowUpRight size={20} />
              <p>Twitter Ads</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton>
              <FiSettings size={20} />
              <p>Settings & Privacy</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton onClick={handleOpen}>
              <BsPencilSquare size={20} />
              <p>Display</p>
            </DisplayButton>
            <ModelBox open={open} handleClose={handleClose} />
          </li>
          <li>
            <DisplayButton onClick={logOutHandler}>
              <RiLogoutBoxLine size={22} />
              <p>Log out</p>
            </DisplayButton>
          </li>
        </NavDisplayUL>
      </DivDisplay>
    </MainDiv>
  );
};

export default MoreForm;
