import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div className="text-red-600 text-center mt-">hello from here</div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
