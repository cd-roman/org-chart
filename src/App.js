import React, { Fragment } from "react";
import "./App.scss";
import { GlobalStyle } from "./global.styles";
import OrgChart from "./components/OrgChart/OrgChart";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <OrgChart />
    </Fragment>
  );
}

export default App;
