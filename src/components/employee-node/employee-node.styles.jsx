import React, { useState } from 'react';
import avatarImage from '../../assets/avatar-ps-resized.jpg';

function EmployeeNode({ setSelectedNode, setShowForm }) {
  const data = {
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
  };

  const [nodeData, setNodeData] = useState(data);

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

  const addEmployee = (newEmployee, selectedNode) => {
    // Add the new employee to the selected node's children array
    selectedNode.children = [...(selectedNode.children || []), newEmployee];
    // Update the data state
    setNodeData([...nodeData]);
  };

  return { nodeData, nodeTemplate, addEmployee };
}

export default EmployeeNode;
