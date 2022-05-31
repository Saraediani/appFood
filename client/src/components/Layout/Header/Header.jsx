import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useGlobalContext from "../../../hooks/useGlobalContext";
import useLogout from "../../../hooks/useLogout";
import * as HeaderStyles from "./Header.styles";

const Header = () => {
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  const { isSidebarOpen } = useGlobalContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <HeaderStyles.StyledHeader isSidebarOpen={isSidebarOpen}>
      <HeaderStyles.User onClick={toggleDropdown}>
        <HeaderStyles.AvatarPlaceHolder size={32} />
        <HeaderStyles.Info>
          <HeaderStyles.Role>{auth.role}</HeaderStyles.Role>
          <HeaderStyles.FullName>
            {auth.firstName} {auth.lastName}
          </HeaderStyles.FullName>
        </HeaderStyles.Info>
        <HeaderStyles.DropdownToggle size={16} />
      </HeaderStyles.User>
      <HeaderStyles.Dropdown isDropdownOpen={isDropdownOpen}>
        <HeaderStyles.DropdownHeader>
          <HeaderStyles.AvatarPlaceHolder size={35} />
          <HeaderStyles.DropdownInfo>
            <HeaderStyles.DropdownFullName>
              {auth.firstName} {auth.lastName}
            </HeaderStyles.DropdownFullName>
            <HeaderStyles.DropdownEmail>
              {auth.email}
            </HeaderStyles.DropdownEmail>
          </HeaderStyles.DropdownInfo>
        </HeaderStyles.DropdownHeader>
        <HeaderStyles.List>
          <HeaderStyles.Link>
            <BiUser size={18} />
            <HeaderStyles.LinkLabel>View Profile</HeaderStyles.LinkLabel>
          </HeaderStyles.Link>
          <HeaderStyles.Link>
            <FiLogOut size={18} />
            <HeaderStyles.LinkLabel onClick={signOut}>Logout</HeaderStyles.LinkLabel>
          </HeaderStyles.Link>
        </HeaderStyles.List>
      </HeaderStyles.Dropdown>
    </HeaderStyles.StyledHeader>
  );
};

export default Header;
