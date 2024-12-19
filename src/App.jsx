import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
