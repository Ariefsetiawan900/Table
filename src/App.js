import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Example from "./Pages/Example";

// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
