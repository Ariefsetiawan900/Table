import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import Example from './Pages/Example'


import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/example" component={Example}/>

      </Router>
    </div>
  );
}

export default App;
