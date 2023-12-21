import React, { useEffect, useState } from "react";
import instance from "../../axios";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/default.jpg";
import { HomeDiv, LoadingDiv } from "../../component/div";
import HomeHeader from "./homeHeader";
import HomeTweet from "./homeTweet";

const HomeBody = () => {
  const navigate = useNavigate();
  const [tweetData, setTweetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchTweetsHandler = async () => {
      try {
        setIsLoading(true);
        const res = await instance.get("tweet/getAllTweets");

        const data = await res.data.data;
        setTweetData(data);
        setIsLoading(false);
      } catch (err) {
        navigate("/signIn", { replace: true });
        console.log(err);
      }
    };
    fetchTweetsHandler();
  }, []);
  return (
    <HomeDiv>
      <HomeHeader setTweetData={setTweetData} setIsLoading={setIsLoading} />
      {isLoading ? (
        <LoadingDiv>
          <CircularProgress size={60} />
        </LoadingDiv>
      ) : (
        <>
          {tweetData.map((tweet) => (
            <HomeTweet
              key={tweet._id}
              name={tweet.user.name}
              userName={tweet.user.userName}
              tweet={tweet.tweet}
              pImage={tweet.user.profileImage}
              tweetPhoto={tweet.photo}
            />
          ))}
        </>
      )}
    </HomeDiv>
  );
};

export default HomeBody;
