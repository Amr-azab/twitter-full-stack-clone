import React, { useState } from "react";
import { FiHeart, FiRepeat, FiShare, FiMessageSquare } from "react-icons/fi";
import {
  FiDiv,
  TweetCard,
  TweetDiv,
  UserDiv,
  UserEmailDiv,
} from "../../component/div";
import { IMG, ImageTweet } from "../../component/img";
import { P, UserTweet } from "../../component/p";
import { UserLink } from "../../component/link";
import TweetPhoto from "./tweetPhoto";
const HomeTweet = ({ name, userName, tweet, pImage, tweetPhoto }) => {
  const [openPhoto, setOpenPhoto] = useState(false);
  const handleOpenTweetPhoto = () => {
    setOpenPhoto(true);
  };
  const handleCloseTweetPhoto = () => {
    setOpenPhoto(false);
  };
  return (
    <TweetCard>
      <IMG src={pImage} />
      <TweetDiv>
        <UserDiv>
          <UserEmailDiv>
            <UserLink to={`/Profile/${userName}`} bold="true">
              {name}{" "}
            </UserLink>
            <P username="true">{userName}</P>
          </UserEmailDiv>
          <UserTweet>{tweet}</UserTweet>
          {tweetPhoto ? (
            <>
              <ImageTweet src={tweetPhoto} onClick={handleOpenTweetPhoto} />
              <TweetPhoto
                open={openPhoto}
                photo={tweetPhoto}
                close={handleCloseTweetPhoto}
              />
            </>
          ) : null}
        </UserDiv>
        <FiDiv>
          <FiMessageSquare size={30} />
          <FiRepeat size={30} />
          <FiHeart size={30} />
          <FiShare size={30} />
        </FiDiv>
      </TweetDiv>
    </TweetCard>
  );
};

export default HomeTweet;
