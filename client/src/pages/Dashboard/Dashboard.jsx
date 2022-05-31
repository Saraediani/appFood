import { Outlet } from "react-router-dom";

import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import { StyledDashboard } from "./Dashboard.styles";

import "./style.css";

function Dashboard() {
  return (
    <StyledDashboard>
      <Sidebar />
      <Header />
      <Outlet />
    </StyledDashboard>
  );
}

export default Dashboard;
