import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  min-height: 60px;
  padding: 0 20px;
  line-height: 60px;
  cursor: pointer;
  overflow: hidden;
  color: ${({ theme }) => theme.color.primaryText};
  &:hover {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export const Label = styled.span`
  margin-left: 1.5rem;
`;
