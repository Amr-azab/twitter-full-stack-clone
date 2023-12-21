import React, { useState } from "react";
import {
  BiBookmark,
  BiEnvelope,
  BiBell,
  BiListUl,
  BiHash,
  BiDotsHorizontalRounded,
  BiHome,
  BiUser,
} from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { ListDiv, NavDiv } from "../component/div";
import { Ul } from "../component/UI";
import { Li } from "../component/li";
import { H3, H34 } from "../component/H";
import { MoreButton } from "../component/button";
import { NAVLINK } from "../component/link";
import { useNavigate } from "react-router-dom";
import { UserIdStore } from "../store/userStore";
import MoreForm from "./DisplayMore/moreForm";

const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const userProfile = UserIdStore((state) => state.userProfile);
  const username = userProfile.userName;
  if (!username) {
    navigate("/signIn", { replace: true });
  }

  const showDisplayOptions = () => {
    //The purpose of this function seems to be toggling the clicked state variable between true and false
    setClicked((prev) => !prev);
  };
  return (
    <>
      <NavDiv>
        <ListDiv>
          {!clicked && (
            <Ul>
              <Li style={{ padding: "0rem 2rem 0rem 2rem" }}>
                <FaTwitter color="white" size={30} />
              </Li>
              <Li key="home">
                <NAVLINK to="/">
                  <BiHome size={30} />
                  <H34 leftnav="true">Home</H34>
                </NAVLINK>
              </Li>
              <Li key="profile">
                <NAVLINK to={`/Profile/${username}`}>
                  <BiUser size={30} />
                  <H34 leftnav="true">Profile</H34>
                </NAVLINK>
              </Li>
              <Li key="explore">
                <NAVLINK to="/explore">
                  <BiHash size={30} />
                  <H34 leftnav="true">Explore</H34>
                </NAVLINK>
              </Li>
              <Li key="notification">
                <NAVLINK to="/Notification">
                  <BiBell size={30} />
                  <H34 leftnav="true">Notifications</H34>
                </NAVLINK>
              </Li>
              <Li key="messages">
                <NAVLINK to="/messages">
                  <BiEnvelope size={30} />
                  <H34 leftnav="true">Messages</H34>
                </NAVLINK>
              </Li>
              <Li key="bookmarks">
                <NAVLINK to="/bookmarks">
                  <BiBookmark size={30} />
                  <H34 leftnav="true">Bookmarks</H34>
                </NAVLINK>
              </Li>
              <Li key="lists">
                <NAVLINK to="/lists">
                  <BiListUl size={30} />
                  <H34 leftnav="true">Lists</H34>
                </NAVLINK>
              </Li>
              <Li key="more">
                <MoreButton onClick={showDisplayOptions}>
                  <BiDotsHorizontalRounded size={30} />
                  <H34 leftnav="true">More</H34>
                </MoreButton>
              </Li>
            </Ul>
          )}
        </ListDiv>
        {clicked && <MoreForm showDisplayOptions={showDisplayOptions} />}
      </NavDiv>
    </>
  );
};

export default Menu;
