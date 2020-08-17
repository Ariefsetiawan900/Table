import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Dashboard from './Pages/Dashboard'


import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Dashboard}/>
      </Router>
    </div>
  );
}

export default App;
