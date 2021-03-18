import React, { Fragment } from "react";
// Loading Components
import Form from "./Form";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}
