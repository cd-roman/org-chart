import React from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import EmployeeNode from './components/employee-node/employee-node.component';
import './App.scss';

import { GlobalStyle } from './global.styles';

import EmployeeForm from './components/add-employee/add-employee.component';
import useZoomAndPan from './hooks/useZoomAndPan';

function App() {
  const { data, nodeTemplate, showForm, onAddEmployee, setShowForm } = EmployeeNode();
  useZoomAndPan('.p-organizationchart');
  
  return (
    <>
      <GlobalStyle />
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      {showForm && <EmployeeForm onAddEmployee={onAddEmployee} onCancel={() => setShowForm(false)} />}
    </>
  );
}

export default App;
