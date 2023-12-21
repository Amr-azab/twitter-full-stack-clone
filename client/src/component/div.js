import { styled } from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.signup ? "4%" : props.signin ? "4%" : "0%")};
`;

export const DivMain = styled.div`
  background-color: ${({ theme }) => theme.theme.PbackgroundColor};
  width: 100%;
  min-height: 100vh;
`;
export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const FiDiv = styled.div`
  display: flex;
  width: 80%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  svg {
    padding: 0.5rem;
    color: grey;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.4s;
  }

  svg:nth-child(1) {
    &:hover {
      color: #1da1f2;
      background-color: rgba(29, 161, 242, 0.07);
    }
  }

  svg:nth-child(2) {
    &:hover {
      color: #17bf63;
      background-color: rgba(23, 191, 99, 0.07);
    }
  }

  svg:nth-child(3) {
    &:hover {
      color: #e0245e;
      background-color: rgba(224, 36, 94, 0.07);
    }
  }

  svg:nth-child(4) {
    &:hover {
      color: #1da1f2;
      background-color: rgba(29, 161, 242, 0.07);
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    svg {
      font-size: 25px;
    }
  }
`;
export const FiTweetDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  svg {
    padding: 0.4rem;
    color:${({ theme }) => theme.buttonTheme.color};
    border-radius: 100%;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.buttonTheme.hover};
  }

`;
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  path {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
  width: 100%;
`;
export const FiTweetDiv2 = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
  font-size: 32px;
  @media (max-width: 1024px) {
    font-size: 30px;
    width: 55%;
  }
`;

export const TweetCard = styled.div`
  display: flex;
  border-bottom-style: solid;
  border-width: thin;
  border-bottom-color: ${({ theme }) => theme.theme.borderColor};
  padding: 0.5rem;
  gap: 2%;
  align-self: center;
  width: 100%;

  &:hover {
    background-color: ${({ tweet }) =>
      tweet ? "none" : " rgb(150, 150, 150, 0.1)"};
    transition: 0.2s;
  }
`;

export const TweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`;
export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  word-break: break-all;
`;
export const UserEmailDiv = styled.div`
  display: flex;
  width: 100%;
`;
export const ColoredButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  border-radius: 4rem;
  padding: 1rem;
`;
export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  padding: 0.4rem;
  border-radius: 1rem;
`;
export const NotificationsCard = styled.div`
  display: flex;
  border-bottom-style: solid;
  border-width: thin;
  border-bottom-color: ${({ theme }) => theme.theme.borderColor};
  padding: 1rem;
  gap: 2%;
  width: 100%;
  &:hover {
    background-color: ${({ tweet }) =>
      tweet ? "none" : " rgb(150, 150, 150, 0.1)"};
    transition: 0.2s;
  }
  justify-content: flex-start;
  svg {
    margin-top: 0.5rem;
  }
`;
export const NotificationMessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;
export const ColumnDiv = styled.div`
  width: 35%;
  padding: 0.5rem 0 0 2rem;
  border-left: solid;
  border-color: ${({ theme }) => theme.theme.borderColor};
  border-width: thin;
  min-height: 100vh;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const FixedDiv = styled.div`
  position: fixed;
  width: 18%;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  svg {
    color: ${({ theme }) => theme.theme.placeholder};
  }
  padding: 0.8rem;
  width: 100%;
  border: none;
  border-radius: 5rem;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem 1rem;

  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
    padding: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.buttonTheme.hover};
      border-radius: 5rem;
      cursor: pointer;
      transition: 0.4s;
    }
  }
`;

export const TrendDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: thin;
  border-top-style: solid;
  border-color: ${({ theme }) => theme.theme.trendBorderColor};
  padding: 0.8rem;
  &:hover {
    cursor: pointer;
    transition: 0.9s;
    background-color: ${({ theme }) => theme.theme.trendHover};
  }
`;
export const TrendingDiv = styled.div`
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  width: 100%;
  border-radius: 1.5rem;
  padding-top: 1rem;

  div:nth-child(7) {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  &:nth-child(3) div:nth-child(5) {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
`;
export const TrendsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
export const UserToFollowDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.6rem;
  width: 60%;
`;
export const WhoToFollowDiv = styled.div`
  display: flex;
  width: 100%;
  border-top: thin;
  border-top-style: solid;
  // justify-content: space-between;
  align-items: center;
  border-color: ${({ theme }) => theme.theme.trendBorderColor};
  padding: 0.6rem;
  &:hover {
    cursor: pointer;
    transition: 0.9s;
    background-color: ${({ theme }) => theme.theme.trendHover};
  }
`;
export const NavDiv = styled.div`
  width: 25%;
  border-right: solid;
  border-color: ${({ theme }) => theme.theme.borderColor};
  border-width: thin;
  min-height: 100vh;
  @media (max-width: 1024px) {
    width: 20%;
  }
`;
export const ListDiv = styled.div`
  position: fixed;
`;
export const LayoutDiv = styled.div`
  display: flex;
  width: 100%;
`;
export const ModalDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const MainDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    padding: 0 0 0 0.5rem;
    z-index: 99;
  }
`;
export const DivDisplay = styled.div`
  position: fixed;
  z-index: 100;
`;
export const DisplayDiv = styled.div`
  padding: 5rem;
  background-color: red;
`;
export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  background-color: ${({ theme }) => theme.theme.PbackgroundColor};
  box-shadow: 0rem 0rem 2rem grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CoverDiv = styled.div`
  width: 100%;
`;
export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 0 0rem 2rem;
  line-height: 1.5;
`;
export const ProfileHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  path {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
export const ProfileLoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  span {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
export const SaveCancelDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: ${(props) => (props.not ? "2rem" : "1rem")};
  margin: 1rem;
  gap: 1rem;
`;
export const UserDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-bottom: thin;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.theme.borderColor};
`;
export const CoverCameraIconDiv = styled.i`
  top: 25rem;
  left: 47%;
  position: absolute;
  color: white;
  @media (max-width: 1024px) {
    left: 56%;
  }
`;
export const ProfileCameraIconDiv = styled.i`
  top: -2rem;
  left: 8rem;
  position: absolute;
  color: white;
  z-index: 100;
`;
export const UpdateCoverDiv = styled.label`
  width: 100%;
  height: 30rem;
`;
export const UpdateProfileDiv = styled.label`
  // width: 100%;
  // height: 30rem;
`;
export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const LoadingDiv = styled.div`
  padding-top: 1rem;
  span {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
