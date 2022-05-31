import { Outlet } from "react-router-dom";
import { StyledDashboard } from "../pages/Dashboard/Dashboard.styles";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";

function Layout() {
  return (
    <main className="App">
      <StyledDashboard>
        <Sidebar />
        <Header />
        <Outlet />
      </StyledDashboard>
    </main>
  );
}

export default Layout;
