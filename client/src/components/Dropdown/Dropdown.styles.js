import styled from "styled-components";

export const StyledDropdown = styled.div`
  display: ${({ isDropdownOpen }) => (isDropdownOpen ? "block" : "none")};
  text-align: left;
  position: absolute;
  background: #18212d;
  padding: 1rem;
  color: #b6c6e3;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  width: 250px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 5px;
  box-shadow: 0px 3px 9px -2px rgba(0, 0, 0, 0.42);
`;
