import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/Button/index";
import { HookInput } from "./components/BasicInputField";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Login />
      </Router>
    </div>
  );
}

export default App;
