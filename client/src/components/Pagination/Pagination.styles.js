import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const PageItem = styled.li`
  display: inline;
  padding: 5px 12px;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.primaryText};
  cursor: pointer;
  &:hover,
  &:hover button {
    background-color: ${({ theme }) => theme.color.bgSecondary};
  }
  button:hover {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export const ActivePage = styled(PageItem)`
  background-color: ${({ theme }) => theme.color.bgSecondary};
  button {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export const Link = styled.button`
  all: unset;
`;
