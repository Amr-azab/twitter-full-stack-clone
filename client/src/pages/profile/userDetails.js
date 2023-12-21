import React from "react";
import { DetailsDiv, TweetCard } from "../../component/div";
import { EmailP, UserBioP, UserNameP } from "../../component/p";
const UserDetails = ({ userName, Name, bio }) => {
  return (
    <TweetCard tweet="true">
      <DetailsDiv>
        <UserNameP>{Name}</UserNameP>
        <EmailP>{userName}</EmailP>
        <UserBioP>{bio}</UserBioP>
      </DetailsDiv>
    </TweetCard>
  );
};
export default UserDetails;
