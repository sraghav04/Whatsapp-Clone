import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app_body">
        <Router>
          <Switch>
            <Route path="/app"> 
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <h1>Home Screen</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
