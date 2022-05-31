import { BiRestaurant, BiUser } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import useGlobalContext from "../../../hooks/useGlobalContext";
import SidebarLink from "../../SidebarLink";
import { Label } from "../../SidebarLink/SidebarLink.styles";
import { Header, LinkGroup, StyledSidebar } from "./Sidebar.styles";

const Sidebar = () => {
  const { isSidebarOpen, sidebarToggle } = useGlobalContext();
  return (
    <StyledSidebar isSidebarOpen={isSidebarOpen}>
      <Header>
        {isSidebarOpen ? (
          <FaBars onClick={sidebarToggle} size={20} />
        ) : (
          <FaTimes onClick={sidebarToggle} />
        )}
        <Label isSidebarOpen={isSidebarOpen} size={20}>
          Site Name
        </Label>
      </Header>
      <LinkGroup>
        <SidebarLink label="Dashboard" path="">
          <GoDashboard size={20} />
        </SidebarLink>
        <SidebarLink label="Restaurants" path="restaurants">
          <BiRestaurant size={20} />
        </SidebarLink>
        <SidebarLink label="Meals" path="meals">
          <GiMeal size={20} />
        </SidebarLink>
        <SidebarLink label="Orders" path="orders">
          <BsCreditCard2Front size={20} />
        </SidebarLink>{" "}
        <SidebarLink label="Manager" path="managers">
          <BiUser size={20} />
        </SidebarLink>
        <SidebarLink label="Clients" path="clients">
          <BiUser size={20} />
        </SidebarLink>
      </LinkGroup>
    </StyledSidebar>
  );
};

export default Sidebar;
