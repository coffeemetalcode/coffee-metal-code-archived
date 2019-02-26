import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Gallery from "./pages/Gallery";
import "./style.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route exact path="/sites" component={Gallery} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
