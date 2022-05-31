import React from "react";
import useGlobalContext from "../../hooks/useGlobalContext";
import { StyledDropdown } from "./Dropdown.styles";

const Dropdown = ({ children }) => {
  const { isDropdownOpen } = useGlobalContext();

  return (
    <StyledDropdown isDropdownOpen={isDropdownOpen} right={0} top={"30px"}>{children}</StyledDropdown>
  );
};

export default Dropdown;
