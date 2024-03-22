import React, { useState } from 'react';
import avatarImage from '../../assets/avatar-ps-resized.jpg';
import AddButton from '../add-button/add-button.component';

function EmployeeNode() {
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
        <AddButton setSelectedNode={setSelectedNode} setShowForm={setShowForm} node={node} />
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

  return { data, nodeTemplate, showForm, onAddEmployee };
}

export default EmployeeNode;