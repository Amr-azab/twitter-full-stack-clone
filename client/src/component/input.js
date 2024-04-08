import { styled } from "styled-components";

export const Input = styled.input`
  width: 35%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  color: ${({ theme }) => theme.theme.textColor};
  &::placeholder {
    color: ${({ theme }) => theme.theme.placeholder};
  }
  &:focus {
    outline: none;
  }
`;
export const InputSearch = styled.input`
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  color: ${({ theme }) => theme.theme.textColor};
  font-size: 1.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.theme.placeholder};
    font-size: 1.5rem;
  }
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const UserInput = styled.input`
  width: 100%;
  // margin: 1rem 0 1rem 0;
  border: none;
  border-bottom: thin;
  border-color: ${({ theme }) => theme.buttonTheme.color};
  border-bottom-style: solid;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  color: ${({ theme }) => theme.theme.textColor};
`;
