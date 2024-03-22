import React, { useState } from 'react';
import avatarImage from '../../assets/avatar-ps-resized.jpg';
import AddButton from '../add-button/add-button.component';
import KebabMenu from '../node-menu-icon/node-menu-icon.component';

import { EmployeeNodeContainer, ImageContainer, EmployeeName, EmployeeTitle } from './employee-node-styles';

function EmployeeNode() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([{
    name: 'Lucy Adams',
    expanded: true,
    data: {avatar: avatarImage, title: 'CEO'},
    children: [
      {
        name: 'Jane Smith',
        expanded: true,
        data: {avatar: avatarImage, title: 'Chief Information Officer'}
      },
      {
        name: 'Amanda Brown',
        expanded: true,
        data: {avatar: avatarImage, title: 'Chief Financial Officer'}
      }
    ]
  }]);

  const nodeTemplate = (node) => {
    return (
      <EmployeeNodeContainer>
        <KebabMenu />
        <ImageContainer>
          <img src={node.data.avatar} alt={node.label}/>
        </ImageContainer>
        <EmployeeName>{node.name}</EmployeeName>
        <EmployeeTitle>{node.data.title}</EmployeeTitle>
        <AddButton className="add-button" setSelectedNode={setSelectedNode} setShowForm={setShowForm} node={node} />
      </EmployeeNodeContainer>
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



  return { data, nodeTemplate, showForm, onAddEmployee, setShowForm };
}

export default EmployeeNode;