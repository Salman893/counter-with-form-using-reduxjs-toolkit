import "./App.css";
import React, { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import { useSelector } from "react-redux";

const App = (props) => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isLoggedIn && <Login />}
      {isLoggedIn && <UserPage />}
      <Counter />
    </Fragment>
  );
};

export default App;
