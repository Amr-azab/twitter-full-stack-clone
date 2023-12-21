import { styled, css } from "styled-components";

export const Button = styled.button`
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  color: #ffffff;
  width: ${({ tweet }) => (tweet ? "20%" : "31%")};
  margin: 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
  }
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;
export const TweetButton = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.theme.color};
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  margin-left: 0.8rem;
  &:disabled {
    opacity: 0.3;
  }
`;
const buttonStylesRGYB = css`
  border-radius: 2rem;
  border: none;
  transition: ease-out 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  width: 2rem;
  height: 2rem;
  svg {
    color: white;
  }
`;

export const RedButton = styled.button`
  ${buttonStylesRGYB}
  background-color: #e0144c;
`;
export const OrangeButton = styled.button`
  ${buttonStylesRGYB}
  background-color: #F86F03;
`;
export const BlueButton = styled.button`
  ${buttonStylesRGYB}
  background-color: #1DA1F2;
`;
export const YellowButton = styled.button`
  ${buttonStylesRGYB}
  background-color: #FFAC33;
`;
export const PurpleButton = styled.button`
  ${buttonStylesRGYB}
  background-color: #794BC4;
`;
export const GreenButton = styled.button`
  ${buttonStylesRGYB}
  background-color: #17BF63;
`;
const buttonStylesLDD = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  width: 25%;
  font-size: 1rem;
  border-radius: 1.2rem;
  border-style: solid;
  border-color: ${({ active, theme }) =>
    active ? theme.buttonTheme.color : "grey"};

  svg {
    color: ${({ active, theme }) =>
      active ? theme.buttonTheme.color : "grey"};
    background-color: ${({ active, theme }) =>
      active ? theme.buttonTheme.color : "none"};
    border-radius: 5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const LightButton = styled.button`
  ${buttonStylesLDD}
  background-color: #f7f7f7;
  color: #2c2d34;
`;

export const DimButton = styled.button`
  ${buttonStylesLDD}
  background-color: #0c2335;
  color: #f7f7f7;
`;

export const DarkButton = styled.button`
  ${buttonStylesLDD}
  background-color: #100f0f;
  color: #f7f7f7;
`;

export const FollowButton = styled.button`
  border-radius: 5rem;
  background-color: inherit;
  color: ${({ theme }) => theme.buttonTheme.color};
  border: thin;
  border-style: solid;
  font-weight: bold;
  width: 6rem;
  // align-self: flex-end;
  padding: 0.4rem;
  // margin: 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.buttonTheme.hover};
  }
`;
export const NavTweetButton = styled.button`
  border-radius: 2rem;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  color: #ffffff;
  width: 20rem;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
export const MoreButton = styled.button`
  display: flex;
  width: 100%;
  border-radius: 4rem;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;
  background-color: inherit;
  font-size: 1.8rem;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.buttonTheme.hover};
    border-color: ${({ theme }) => theme.buttonTheme.color};
    cursor: pointer;
    H3 {
      color: ${({ theme }) => theme.buttonTheme.color};
    }
    path {
      color: ${({ theme }) => theme.buttonTheme.color};
    }
  }
  path {
    color: ${({ theme }) => theme.theme.textColor};
  }
`;
export const DoneButtons = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5rem;
  width: 20%;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: 0.2s;
  }
`;
export const DisplayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2rem;
  border: none;
  background-color: inherit;
  width: 100%;
  svg {
    color: grey;
    margin-right: 1rem;
  }
  p {
    color: ${({ theme }) => theme.theme.textColor};
    font-size: 1rem;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.theme.SbackgroundColor};
    transition: 0.5s;
  }
`;
export const SaveButton = styled.button`
  color: ${({ theme }) => theme.buttonTheme.color};
  border-radius: 5rem;
  background-color: inherit;
  border: thin;
  border-style: solid;
  font-weight: 900;
  padding: 0.5rem 1rem 0.5rem 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.buttonTheme.hover};
  }
`;
export const CancelButton = styled.button`
  color: ${({ theme }) => theme.buttonTheme.color};
  border-radius: 5rem;
  background-color: inherit;
  border: thin;
  border-style: solid;
  font-weight: 900;
  padding: 0.5rem 1rem 0.5rem 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.buttonTheme.hover};
  }
`;
export const EditProfileButton = styled.button`
  color: ${({ theme }) => theme.buttonTheme.color};
  border-radius: 5rem;
  background-color: inherit;
  border: thin;
  border-style: solid;
  font-weight: 900;
  padding: 0.5rem 1rem 0.5rem 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.buttonTheme.hover};
  }
`;
