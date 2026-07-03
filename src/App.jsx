import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  const [view, setView] = useState("signup");

  if (view === "signup") {
    return <SignUp onLoginClick={() => setView("login")} />;
  }

  return <Login onSignUpClick={() => setView("signup")} />;
}