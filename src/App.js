import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "jquery";

import Form from "./Components/Form.jsx";
import Table from "./ReusableComponents/Table/Tables.jsx";
function App() {
  return (
    <Router>
      <Route path="/table" component={Table} />
      <Route path="/" exact component={Form} />
    </Router>
  );
}

export default App;
