import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";

// components
import Navbar from "./components/Navbar";

const App: FC = () => {
  return (
    <Router>
      <header className="header">
        <Navbar />
      </header>

      <main className="container">
        <Switch>
          <Route path="/" exact render={() => <Home />} />

          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />

          <Route path="/dashboard" exact render={() => <Dashboard />} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
