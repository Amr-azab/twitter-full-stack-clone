import React from "react";
import { DetailsDiv, ProfileHeaderDiv, TweetCard } from "../../component/div";
import { BiArrowBack } from "react-icons/bi";
import { LINK, LINKP } from "../../component/link";
import { CountP, UserNameP } from "../../component/p";
const Pheader = ({ Name, count }) => {
  return (
    <TweetCard tweet="true">
      <ProfileHeaderDiv>
        <LINKP to="/">
          <BiArrowBack size={35} />
        </LINKP>
        <DetailsDiv>
          <UserNameP>{Name}</UserNameP>
          <CountP>{count} tweets</CountP>
        </DetailsDiv>
      </ProfileHeaderDiv>
    </TweetCard>
  );
};
export default Pheader;
