import { styled } from "styled-components";

export const P = styled.p`
  color: ${(props) =>
    // props.username ? props.theme.theme.trendsColor : props.theme.theme.textColor};
    props.username ? "grey" : props.theme.theme.textColor};
  margin: 0rem 0.5rem 1rem 0rem;

  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  padding-top: 0.4rem;
  font-size: ${(props) => (props.username ? "1.4rem" : "1.6rem")};
`;

export const UserTweet = styled.p`
  color: ${({ theme }) => theme.theme.textColor};
  margin: 0;
  padding: 0.1rem;
  padding-left: 0rem;
  word-break: break-word;
  @media (max-width: 1024px) {
    font-size: 1.7rem;
    word-break: break-word;
  }
`;
export const NotificationP = styled.p`
  color: ${(props) =>
    props.tweet ? props.theme.theme.trendsColor : props.theme.theme.textColor};
  font-size: 1.4rem;
  line-height: 1.5;
`;
export const P2 = styled.p`
  align-self: flex-start;
  font-size: 1.3rem;

  font-weight: bold;
  color: ${({ theme }) => theme.theme.trendsColor};
`;
export const ErrorMsg = styled.p`
  color: red;
`;
export const UserNameP = styled.p`
  color: ${({ theme }) => theme.theme.textColor};
  font-size: 1.9rem;
  font-weight: bold;
`;
export const UserBioP = styled.p`
  color: ${({ theme }) => theme.theme.textColor};
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;
export const EmailP = styled.p`
  color: grey;
  font-size: 1.4rem;
`;
export const CountP = styled.p`
  color: grey;
  font-size: 1.4rem;
`;
