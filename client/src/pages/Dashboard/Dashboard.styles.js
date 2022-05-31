import styled from "styled-components";

export const StyledDashboard = styled.section`
  /* width: 100%; */
  min-height: 100vh;
  /* display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 60px 1fr; */
  .dashboard__body {
    position: absolute;
    top: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "60px")};
    left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "250px")};
    background-color: ${({ theme }) => theme.color.bgSecondary};
    color: ${({ theme }) => theme.color.primaryText};
    width: -moz-available;
    padding: 2rem 0;
  }
  .dashboard__body__list {
    background-color: ${({ theme }) => theme.color.bgPrimary};
  }
`;

export const DashboardBody = styled.section`
  position: absolute;
  top: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "60px")};
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "250px")};
  width: -moz-available;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  color: ${({ theme }) => theme.color.primaryText};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  color: #fff;
  margin: 0;
  padding: 0;
`

export const AddButton = styled.button`
  /* background-color: ${({ theme }) => theme.color.secondaryText}; */
  background-color: #6576ff;
  color: #fff;
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* width: 100px; */
  padding: 7px;
`;
