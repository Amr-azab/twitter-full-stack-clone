import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { HeaderDiv, HomeDiv, TweetCard } from "../../component/div";
import { H34 } from "../../component/H";
import Card from "./Card";
const NotificationForm = () => {
  return (
    <>
      <HomeDiv>
        <TweetCard tweet="true">
          <HeaderDiv>
            <H34>Notifications</H34>
            <BiSolidBell size={25} />
          </HeaderDiv>
        </TweetCard>

        <Card />
      </HomeDiv>
    </>
  );
};

export default NotificationForm;
