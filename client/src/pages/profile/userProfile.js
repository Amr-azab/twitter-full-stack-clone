import React, { useState, useEffect } from "react";
import instance from "../../axios";
import { CircularProgress } from "@mui/material";
import { UserIdStore } from "../../store/userStore";
import { useNavigate, useParams } from "react-router-dom";
import UserData from "./UserData";
import {
  ProfileDiv,
  ProfileLoadingDiv,
  SaveCancelDiv,
} from "../../component/div";
import { EditProfileButton } from "../../component/button";
import UserDetails from "./userDetails";
import Cover from "./cover";
import Pheader from "./Pheader";
import HomeTweet from "../HomePage/homeTweet";
const UserProfile = () => {
  const { username } = useParams();
  const [edit, setEdit] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [tweetData, setTweetData] = useState([]);
  const [userName, setUserName] = useState();
  const [bio, setBio] = useState();
  const [name, setName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const userProfile = UserIdStore((state) => state.userProfile);
  const navigate = useNavigate();
  if (!userProfile._id || !userProfile) {
    navigate("/signIn", { replace: true });
  }
  useEffect(() => {
    const fetchDataHandler = async (url) => {
      try {
        setIsLoading(true);
        const res = await instance.get(url);
        const data = await res.data.data;

        setUserName(data.userName);
        setName(data.name);
        setBio(data.bio);
        setProfileImage(data.profileImage);
        setCoverImage(data.coverImage);
      } catch (err) {
        navigate("/signIn", { replace: true });
        console.log(err);
      }
    };

    userProfile.userName === username
      ? fetchDataHandler(`user/getMe`)
      : fetchDataHandler(`user/getUser/${username}`);
  }, [shouldRefetch, username]);
  useEffect(() => {
    const fetchTweetsHandler = async (link) => {
      try {
        const res = await instance.get(link);
        const data = await res.data.data;
        setCount(data.length);

        setTweetData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    userProfile.userName === username
      ? fetchTweetsHandler(`tweet/getMyTweets`)
      : fetchTweetsHandler(`tweet/getUserTweets/${username}`);
  }, [shouldRefetch, username]);
  const editHandler = () => {
    setEdit(true);
  };

  const cancelHandler = () => {
    setEdit(false);
  };
  return (
    <>
      <ProfileDiv>
        {isLoading ? (
          <ProfileLoadingDiv>
            <CircularProgress size={90} />
          </ProfileLoadingDiv>
        ) : (
          <>
            <Pheader Name={name} count={count} />
            {userProfile.userName === username ? (
              <>
                {!edit && (
                  <>
                    <Cover
                      profileImage={profileImage}
                      coverImage={coverImage}
                    />
                    <SaveCancelDiv>
                      <EditProfileButton onClick={editHandler}>
                        Edit profile
                      </EditProfileButton>
                    </SaveCancelDiv>
                    <UserDetails Name={name} userName={userName} bio={bio} />
                  </>
                )}
                {edit && (
                  <>
                    <UserData
                      Name={name}
                      bio={bio}
                      cancelHandler={cancelHandler}
                      setShouldRefetch={setShouldRefetch}
                      setEdit={setEdit}
                      setIsLoading={setIsLoading}
                      profileImage={profileImage}
                      coverImage={coverImage}
                    />
                  </>
                )}
              </>
            ) : (
              ""
            )}
            {userProfile.userName !== username && (
              <>
                <Cover profileImage={profileImage} coverImage={coverImage} />
                <SaveCancelDiv not="true"></SaveCancelDiv>
                <UserDetails Name={name} userName={userName} bio={bio} />
              </>
            )}
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
      </ProfileDiv>
    </>
  );
};

export default UserProfile;
