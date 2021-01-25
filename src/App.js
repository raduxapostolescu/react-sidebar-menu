import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Nutrition from "./pages/Nutrition";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/food" component={Food} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact" component={Contact} />
            <Route path="/nutrition" component={Nutrition} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
