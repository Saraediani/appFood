import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    bgPrimary: "#101924",
    bgSecondary: "#090f17",
    primaryText: "#8094ae",
    secondaryText: "#816bff",
    border: "#203247",
  },
  mediaquery: {
    mobile: "",
    tablet: "",
    desktop: "",
  },
  sidebarWidth: {
    open: "250px",
    clos: "60px",
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body { height: 100vh; }

#root {
  width: 100%;
  height: 100%;
}

.App {
  width: 100%;
  height: 100%;
  font-family: sans-serif;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}

`;

export const Container = styled.div`
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
