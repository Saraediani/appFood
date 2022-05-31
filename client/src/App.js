import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./app.css";
import * as components from "./components";
import ActivateAccount from "./components/ActivateAccount";
import Layout from "./components/Layout";
import AddMeal from "./components/Meals/AddMeal";
import PersistLogin from "./components/PersistLogin ";
// import UpdateRestaurant from "./pages/UpdateRestaurant";
import RequireAuth from "./components/RequireAuth";
import { GlobalStyle, theme } from "./Global.styles";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import MealsDetails from "./pages/MealsDetails/MealsDetails";
import Details from "./pages/Orders/Details/Details";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword";
import AddRestaurant from "./pages/Restaurant/AddRestaurant";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activate-account/:token" element={<ActivateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* Privet route */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedUsers={["admin"]} />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="restaurants">
                <Route
                  index
                  element={
                    <components.List
                      title={"Restaurant List"}
                      route="restaurant"
                    >
                      <AddRestaurant />
                    </components.List>
                  }
                />
                <Route
                  path="update/:id"
                  // element={<UpdateRestaurant title={"Update Restaurant"} />}
                />
              </Route>
              <Route path="meals">
                <Route
                  index
                  element={
                    <components.List title={"Meals List"} route="meal">
                      <AddMeal />
                    </components.List>
                  }
                ></Route>
                <Route
                  path=":id"
                  element={<MealsDetails title={"Meal Detail"} />}
                ></Route>
                <Route
                  path="update/:id"
                  element={<components.UpdateMeal title={"Update Meals"} />}
                ></Route>
              </Route>
              <Route path="orders">
                <Route
                  index
                  element={
                    <components.List title={"Orders List"} route="order" />
                  }
                ></Route>
                <Route path=":id" element={<Details />} />
              </Route>
              <Route path="managers">
                <Route
                  index
                  element={
                    <components.UsersList
                      title={"Managers List"}
                      type="manager"
                    />
                  }
                ></Route>
                <Route
                  path="update/:id"
                  element={
                    <components.UpdateUser
                      title={"Update Manager"}
                      type="manager"
                    />
                  }
                ></Route>
              </Route>
              <Route path="clients">
                <Route
                  index
                  element={
                    <components.UsersList
                      title={"Clients List"}
                      type="client"
                    />
                  }
                ></Route>
                <Route
                  path="update/:id"
                  element={
                    <components.UpdateUser
                      title={"Update Client"}
                      type="client"
                    />
                  }
                ></Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
