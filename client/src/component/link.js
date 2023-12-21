import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const LINK = styled(Link)`
  display: flex;
  width: 100%;
  border-radius: 4rem;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;

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
export const NavOptionsLINK = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2rem;
  svg {
    // padding: 1rem;
    color: grey;
    margin-right: 1rem;
  }
  h4 {
    color: ${({ theme }) => theme.theme.textColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.theme.SbackgroundColor};
    transition: 0.5s;
  }
`;
export const NAVLINK = styled(NavLink)`
  display: flex;
  width: 100%;
  border-radius: 4rem;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;

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
  &.active {
    path {
      color: ${({ theme }) => theme.buttonTheme.color};
    }
    H3 {
      color: ${({ theme }) => theme.buttonTheme.color};
    }
  }
`;
export const LINKP = styled(Link)`
  padding: 0rem;
  svg {
    padding: 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.buttonTheme.hover};
      border-radius: 5rem;
    }
  }
`;
export const UserLink = styled(Link)`
  color: ${(props) => (props.username ? "grey" : props.theme.theme.textColor)};
  margin: 0rem 0.5rem 1rem 0rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  padding-top: 0.4rem;
  font-size: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;
export const SignUpLINK = styled(Link)`
  color: #1d74f2;
  &:hover {
    text-decoration: underline;
  }
`;
