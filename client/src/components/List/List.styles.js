import styled from "styled-components";

export const StyledList = styled.section`
  width: calc(
    100% -
      (
        ${({ isSidebarOpen, theme }) =>
          isSidebarOpen ? theme.sidebarWidth.open : theme.sidebarWidth.clos}
      )
  );
  min-height: calc(100% - 60px);
  padding: 2em;
  background-color: #0d141d;
  position: absolute;
  top: 60px;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "60px")};
  color: ${({ theme }) => theme.color.primaryText};
  transition: left ease-in-out 500ms, width ease-in-out 500ms;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  color: #fff;
  margin: 0;
  padding: 0;
`;

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
  margin-left: auto;
`;

export const Filter = styled.section`

`
