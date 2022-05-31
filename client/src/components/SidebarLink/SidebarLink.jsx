import useGlobalContext from "../../hooks/useGlobalContext";
import { Label, StyledLink } from "./SidebarLink.styles";

function SidebarLink({ icon, label, path, children }) {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <StyledLink to={path}>
      {children}
      <Label>{label}</Label>
    </StyledLink>
  );
}

export default SidebarLink;
