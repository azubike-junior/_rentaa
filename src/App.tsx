import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/Button/index";
import { HookInput } from "./components/BasicInputField";
import LoginPage from "./pages/LoginPage/loginPage";

function App() {
  return (
    <div className="flex flex-col justify-center px-24 max-w-3xl">
      <HookInput show type="text" label="First Name" name="firstName" />

      <Button
        child="sign up"
        type="submit"
        className="w-full py-7 bg-secondary font-sans text-white rounded"
      />
    </div>
    // <LoginPage />
  );
}

export default App;
