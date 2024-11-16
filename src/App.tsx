// App.js
import { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";

import WeatherSearch from "./Components/WeatherSearch";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";

const clientId =
  "638015261366-pu3m1moojfc13kioepj0mopbuo2ljmv9.apps.googleusercontent.com";

function App() {
  const [user, setUser] = useState(null);

  // On successful login, save the user data in localStorage
  const handleLoginSuccess = (response) => {
    const { credential } = response;
    const userObject = {
      token: credential,
      profile: decodeJwt(credential), // decode to get user info
    };
    setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
  };

  // Load user data from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function to clear session data
  const handleLogout = () => {
    googleLogout(); // optional, only if you want to trigger Google's logout
    setUser(null);
    localStorage.removeItem("user");
  };

  // Function to decode JWT token (Google's credential response)
  const decodeJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <div className="flex flex-col p-8 md:p-16 items-center justify-center bg-secondary h-screen ">
      {
        !user ? (<GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />):(<div
          id="base"
          className="border p-8 rounded-xl bg-primary-foreground relative"
        >
          <div className="absolute top-0 left-0 rounded-t-xl bg-primary border-b flex items-center justify-between w-full px-">
            <h2 className="text-primary-foreground text-sm md:text-base ml-4">
              Welcome, {user.profile.name}
            </h2>
            <div className="flex items-center">
              <ModeToggle />
              <Button onClick={handleLogout} size="sm" variant="outline">
                Logout
              </Button>
            </div>
          </div>
          <WeatherSearch />
        </div>)
      }
    
      
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
