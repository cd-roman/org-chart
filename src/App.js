import React, { Fragment } from "react";
import "./App.scss";
import { GlobalStyle } from "./global.styles";
import useZoomAndPan from "./hooks/useZoomAndPan";
import OrgChart from "./components/OrgChart/OrgChart";

function App() {
  useZoomAndPan(".p-organizationchart");

  return (
    <Fragment>
      <GlobalStyle />
      <OrgChart />
    </Fragment>
  );
}

export default App;
