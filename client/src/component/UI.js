import { TextareaAutosize } from "@mui/material";
import { styled } from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const NavDisplayUL = styled.ul`
  width: 100%;
  box-shadow: 0rem 0.3rem 1rem 0.1rem ${({ theme }) => theme.theme.trendsColor};
  // padding: 2.5rem;
  // display: flex;
  // flex-direction: column;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: ${({ theme }) => theme.theme.PbackgroundColor};
  list-style-type: none;
`;
export const TextArea = styled(TextareaAutosize)`
width: 100%;
background-color: transparent;
border: none;
outline: none;
font-size: 1.8rem;
padding: 0rem 0rem 0rem 1rem;
margin-top: 2rem;
font-family: inherit;
resize: none;
overflow: hidden;
color: ${({ theme }) => theme.theme.textColor};
&::placeholder {
  color: ${({ theme }) => theme.theme.grey};
}
  @media (min-width: 1281px) {
    font-size: 1.5rem;
  }
`;
