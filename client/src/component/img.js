import { styled } from "styled-components";

export const IMG = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  align-self: flex-start;
  margin-bottom: 10%;
`;
export const NotificationIMG = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1rem;
`;
export const ImgToFollow = styled.img`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;
export const CoverImg = styled.img`
  width: 100%;
  height: 30rem;
`;

export const DivPhoto = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
`;

export const Img = styled.img`
  width: 15rem;
  height: 15rem;
  top: -9rem;
  left: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  border: 4.5px solid ${({ theme }) => theme.theme.PbackgroundColor};

  @media (max-width: 1024px) {
    z-index: 1;
  }
`;
export const ImageTweet = styled.img`
  margin-top: 1rem;
  width: 90%;
  border-radius: 1rem;
`;
export const TweetImg = styled.img`
  position: absolute;
  height: auto;
  max-width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0rem 0rem 2rem black;

  @media (max-width: 1024px) {
    height: auto;
    width: auto;
  }
`;
