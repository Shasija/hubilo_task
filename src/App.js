import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./assets/css/bootstrap.min.css";
import "jquery";
import rootReducer from "./reducers/index.js";
import Form from "./components/Form/index.jsx";
import Table from "./components/ReusableComponents/Table/Tables.jsx";
const store = createStore(rootReducer());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/table" component={Table} />
          <Route path="/" exact component={Form} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
