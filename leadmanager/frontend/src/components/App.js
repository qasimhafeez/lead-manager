import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import store from "../store";
// Loading Components
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
