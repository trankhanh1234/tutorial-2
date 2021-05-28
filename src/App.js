import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PageCard from "./Atomic/templates/PageCard";
import Homepage from "./Atomic/templates/Homepage";
import Header from "./Atomic/organisms/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage} label="Giỏ Hàng" />
        <Route exact path="/giohang" component={PageCard} />
      </Switch>
    </div>
  );
}

export default App;
