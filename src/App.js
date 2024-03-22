import React, { Fragment } from 'react';
import './App.scss';
import { GlobalStyle } from './global.styles';
import useZoomAndPan from './hooks/useZoomAndPan';
import OrgChart from './components/org-chart/org-chart.component';

function App() {
  
  useZoomAndPan('.p-organizationchart');
  
  return (
    <Fragment>
      <GlobalStyle />
      <OrgChart />
    </Fragment>
  );
}

export default App;
