import { styled } from "styled-components";

export const H2 = styled.h4`
  color: ${({ theme }) => theme.theme.textColor};
  margin: 0rem;
  padding: 0.7rem;
`;
export const H22 = styled.h2`
  color: ${({ theme }) => theme.theme.textColor};
  margin: 0rem 0rem 2rem 0rem;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.theme.textColor};
`;
export const HH = styled.h3`
  color: ${({ theme }) => theme.theme.textColor};
  padding: 1rem;
  @media (max-width: 1024px) {
    display: ${({ leftnav }) => (leftnav ? "none" : "")};
  }
`;

export const H4 = styled.h6`
  color: ${({ theme }) => theme.theme.textColor};
`;
export const H44 = styled.h5`
  color: ${({ theme }) => theme.theme.trendsColor};
  // line-spacing: 1rem;
  text-align: center;
`;
export const H5 = styled.h6`
  color: ${({ theme }) => theme.theme.textColor};
  margin: 0rem;
`;
export const H6 = styled.h6`
  color: ${({ theme, showmore }) =>
    showmore ? theme.buttonTheme.color : theme.theme.trendsColor};
`;
export const H34 = styled.h3`
  color: ${({ theme }) => theme.theme.textColor};
  padding: 1rem;
  @media (max-width: 1024px) {
    display: ${({ leftnav }) => (leftnav ? "none" : "")};
  }
`;
