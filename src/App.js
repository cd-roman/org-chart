import React, { Fragment } from "react";
import "./App.scss";
import { GlobalStyle } from "./global.styles";
import useZoomAndPan from "./hooks/useZoomAndPan";
import OrgChart from "./components/OrgChart/OrgChart";

function App() {
  useZoomAndPan(".org-chart-wrapper");
  return (
    <Fragment>
      <GlobalStyle />
      <div className="org-chart-wrapper">
        <OrgChart />
      </div>
    </Fragment>
  );
}

export default App;
