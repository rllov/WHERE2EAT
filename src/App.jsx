import "./App.css";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import Profile from "./components/Profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";
// import LoginPage from "./pages/LoginPage";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <>
      <h1>Auth0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </>
  );
}

export default App;
