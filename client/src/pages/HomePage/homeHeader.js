import { React, useState } from "react";
import { styled } from "styled-components";
import profileImg from "../../assets/default.jpg";
import {
  TweetCard,
  HeaderDiv,
  FiTweetDiv,
  FiTweetDiv2,
  TweetDiv,
} from "../../component/div";
import { MdOutlineGifBox } from "react-icons/md";
import { FiSmile, FiImage, FiCalendar, FiList } from "react-icons/fi";
import { HH, H3 } from "../../component/H";
import { WiStars } from "react-icons/wi";
import { TextArea } from "../../component/UI";
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import instance from "../../axios";
import { UserIdStore } from "../../store/userStore";
import { Button } from "../../component/button";
import { IMG, ImageTweet } from "../../component/img";

const HomeHeader = ({ setTweetData }) => {
  const [tweet, setTweet] = useState("");
  const user = UserIdStore((state) => state.userProfile);
  const [tweetPhoto, setTweetPhoto] = useState("");
  const [selectedTweetPhoto, setSelectedTweetPhoto] = useState("");
  const tweetHandler = (e) => {
    setTweet(e.target.value);
  };

  const TweetPhotoHandler = (e) => {
    if (e.target.files.length !== 0) {
      setTweetPhoto(e.target.files[0]);
      setSelectedTweetPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };
  const createTweet = async () => {
    if (tweet.trim() === "" && !tweetPhoto) return;

    let tweetFormData = new FormData();

    if (tweetPhoto) tweetFormData.append("photo", tweetPhoto);
    if (tweet) tweetFormData.append("tweet", tweet);

    const res = await instance.post("tweet/createTweet", tweetFormData);
    const data = res.data.data;

    setTweetPhoto("");
    setSelectedTweetPhoto("");
    setTweetData((prev) => [data, ...prev]);
    setTweet("");
  };
  // const Textarea = styled(TextareaAutosize)`
  //   width: 100%;
  //   background-color: transparent;
  //   border: none;
  //   outline: none;
  //   font-size: 1.8rem;
  //   padding: 0rem 0rem 0rem 1rem;
  //   margin-top: 2rem;
  //   font-family: inherit;
  //   resize: none;
  //   overflow: hidden;
  //   color: ${({ theme }) => theme.theme.textColor};
  //   &::placeholder {
  //     color: ${({ theme }) => theme.theme.grey};
  //   }
  //   @media (min-width: 1281px) {
  //     font-size: 1.5rem;
  //   }
  // `;
  const TweetPhotoLabel = styled.label``;
  return (
    <>
      <TweetCard tweet="true">
        <HeaderDiv>
          <HH>Home</HH>
          <WiStars size={40} />
        </HeaderDiv>
      </TweetCard>
      <TweetCard tweet="true">
        <IMG src={user.profileImage} />
        <TweetDiv>
          <TextArea
            placeholder="What's Happening..."
            minRows={1}
            variant="plain"
            value={tweet}
            onChange={tweetHandler}
          />
          <ImageTweet src={selectedTweetPhoto} />
          <FiTweetDiv>
            <FiTweetDiv2>
              <input
                type="file"
                hidden
                id="tweetPhoto"
                onChange={TweetPhotoHandler}
              />
              <TweetPhotoLabel htmlFor="tweetPhoto">
                <FiImage />
              </TweetPhotoLabel>
              <MdOutlineGifBox />
              <FiCalendar />
              <FiList />
              <FiSmile />
            </FiTweetDiv2>
            <Button onClick={createTweet} tweet="true">
              Tweet
            </Button>
          </FiTweetDiv>
        </TweetDiv>
      </TweetCard>
    </>
  );
};

export default HomeHeader;
