import React from "react";
import { H3, H6, H4, H5 } from "../component/H";
import { InputSearch } from "../component/input";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import cenaImg from "../assets/CenaWWE.jpg";
import walterImg from "../assets/walterwhite.jpg";
import romanImg from "../assets/romanwwe.jpg";
import {
  ColumnDiv,
  FixedDiv,
  SearchBarDiv,
  TitleDiv,
  TrendDiv,
  TrendsDiv,
  TrendingDiv,
  WhoToFollowDiv,
  UserToFollowDiv,
} from "../component/div";
import { ImgToFollow } from "../component/img";
import { FollowButton } from "../component/button";

const TrendAndFollow = () => {
  return (
    <ColumnDiv>
      <FixedDiv>
        <TrendsDiv>
          <SearchBarDiv>
            <BiSearch size={20} />
            <InputSearch placeholder="search" />
          </SearchBarDiv>
          <TrendingDiv>
            <TitleDiv>
              <H3>Trends for you</H3>
              <FiSettings size={25} />
            </TitleDiv>
            <TrendDiv>
              <H6>1.Trending</H6>
              <H4>#BREAKING_BAD</H4>
              <H6>600K Tweets</H6>
            </TrendDiv>
            <TrendDiv>
              <H6>2.Trending</H6>
              <H4>#WWE</H4>
              <H6>476K Tweets</H6>
            </TrendDiv>
            <TrendDiv>
              <H6>3.Trending</H6>
              <H4>#الفيل_الزرق</H4>
              <H6>340K Tweets</H6>
            </TrendDiv>
            <TrendDiv>
              <H6>4.Trending</H6>
              <H4>#RKO</H4>
              <H6>200K Tweets</H6>
            </TrendDiv>
            <TrendDiv>
              <H6>5.Trending</H6>
              <H4>#ROMAN_REGINS</H4>
              <H6>190K Tweets</H6>
            </TrendDiv>
            <TrendDiv>
              <H6 showmore="true">Show more</H6>
            </TrendDiv>
          </TrendingDiv>
          <TrendingDiv>
            <TitleDiv>
              <H3>Who to follow</H3>
            </TitleDiv>
            <WhoToFollowDiv>
              <ImgToFollow src={walterImg} />
              <UserToFollowDiv>
                <H5>Bryan</H5>
                <H6>@bryan_cranston</H6>
              </UserToFollowDiv>
              <FollowButton>Follow</FollowButton>
            </WhoToFollowDiv>
            <WhoToFollowDiv>
              <ImgToFollow src={cenaImg} />
              <UserToFollowDiv>
                <H5>Cena</H5>
                <H6>@john_cena</H6>
              </UserToFollowDiv>
              <FollowButton>Follow</FollowButton>
            </WhoToFollowDiv>
            <WhoToFollowDiv>
              <ImgToFollow src={romanImg} />
              <UserToFollowDiv>
                <H5>Roman</H5>
                <H6>@roman_regins</H6>
              </UserToFollowDiv>
              <FollowButton>Follow</FollowButton>
            </WhoToFollowDiv>
            <TrendDiv>
              <H6 showmore="true">Show more</H6>
            </TrendDiv>
          </TrendingDiv>
        </TrendsDiv>
      </FixedDiv>
    </ColumnDiv>
  );
};

export default TrendAndFollow;
