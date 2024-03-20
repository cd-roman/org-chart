import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import './App.scss';

import { GlobalStyle } from './global.styles';

import avatarImage from './assets/avatar-ps-resized.jpg';
import EmployeeForm from './components/add-employee/add-employee.component';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([{
    label: 'Lucy Adams',
    expanded: true,
    data: {avatar: avatarImage, position: 'CEO'},
    children: [
      {
        label: 'Jane Smith',
        expanded: true,
        data: {avatar: avatarImage, position: 'Chief Information Officer'}
      },
      {
        label: 'Amanda Brown',
        expanded: true,
        data: {avatar: avatarImage, position: 'Chief Financial Officer'}
      }
    ]
  }]);

  const nodeTemplate = (node) => {
    return (
      <div>
        <img src={node.data.avatar} alt={node.label} style={{width: '48px', height: '48px', borderRadius: '24px'}} />
        <div>{node.label}</div>
        <div>{node.data.position}</div>
        <button style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          fontSize: '16px',
          lineHeight: '25px',
          textAlign: 'center',
          border: 'none',
          background: 'blue',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={() => {
            setSelectedNode(node);
            setShowForm(true);
          }}
      >+</button>
      </div>
    );
  };


  const onAddEmployee = (newEmployee) => {
    // Add the new employee to the selected node's children array
    selectedNode.children = [...(selectedNode.children || []), newEmployee];
    // Update the data state
    setData([...data]);
    // Hide the form
    setShowForm(false);
  };

  return (
    <>
      <GlobalStyle />
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      {showForm && <EmployeeForm onAddEmployee={onAddEmployee} />}
    </>
  );
}

export default App;
