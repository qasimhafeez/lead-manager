import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// Loading Components
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
