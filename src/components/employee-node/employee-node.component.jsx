import React, { useState } from 'react';
import avatarImage from '../../assets/avatar-ps-resized.jpg';
import AddButton from '../add-button/add-button.component';
import KebabMenu from '../node-menu-icon/node-menu-icon.component';

import { EmployeeNodeContainer, ImageContainer, EmployeeName, EmployeeTitle } from './employee-node-styles';

function EmployeeNode() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([{

    name: 'Board',
    expanded: true,
    data: {avatar: avatarImage, title: 'ACME corp', id: '1'},
    children: [
      {
        name: 'Lucy Adams',
        expanded: true,
        data: {avatar: avatarImage, title: 'CEO', id: '2'},
        children: [
          {
            name: 'Jane Smith',
            expanded: true,
            data: {avatar: avatarImage, title: 'Chief Information Officer', id: '3'},
          },
          {
            name: 'Amanda Brown',
            expanded: true,
            data: {avatar: avatarImage, title: 'Chief Financial Officer', id: '4'},
            children: [
              {
                name: 'Janet Carter',
                expanded: true,
                data: {avatar: avatarImage, title: 'Financial Analyst', id: '5'},
              },        
            ]
          },
          {
            name: 'Joaquin Rodriguez',
            expanded: true,
            data: {avatar: avatarImage, title: 'CTO', id: '6'},
          },         
        ]
      }
    ]
  }]);

  const deleteNode = (nodeId) => {
    const newData = JSON.parse(JSON.stringify(data)); // Deep copy of the data
  
    const findAndDeleteNode = (nodes, parent = null) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].data.id === nodeId) {
          const children = nodes[i].children || [];
          // Handle the case where the node to delete has children
          if (children.length > 0) {
            if (parent) {
              // If there's a parent, splice the children into the parent's children array
              parent.children = parent.children || [];
              parent.children.splice(i, 1, ...children);
            } else {
              // If there's no parent (root level), splice the children into the newData
              newData.splice(i, 1, ...children);
            }
          } else {
            // Handle the case where the node to delete has no children
            if (parent) {
              parent.children.splice(i, 1); // Remove the node from the parent's children
            } else {
              newData.splice(i, 1); // Remove the node from the root level
            }
          }
          return; // Node found and handled, exit the function
        } else if (nodes[i].children) {
          // Recursively search for the node in children
          findAndDeleteNode(nodes[i].children, nodes[i]);
        }
      }
    };
  
    findAndDeleteNode(newData);
    setData(newData);
  };
  
  const nodeTemplate = (node) => {
    return (
      <EmployeeNodeContainer>
        <KebabMenu deleteNode={deleteNode} nodeId={node.data.id} />
        <ImageContainer>
          <img src={node.data.avatar} alt={node.label}/>
        </ImageContainer>
        <EmployeeName>{node.name}</EmployeeName>
        <EmployeeTitle>{node.data.title}</EmployeeTitle>
        <AddButton className="add-button" setSelectedNode={setSelectedNode} setShowForm={setShowForm} node={node} />
      </EmployeeNodeContainer>
    );
  };

  const findHighestId = (data) => {
    let highestId = 0;
    const checkNode = (node) => {
      if (node.data.id > highestId) {
        highestId = node.data.id;
      }
      if (node.children) {
        node.children.forEach(checkNode);
      }
    };
    data.forEach(checkNode);
    return highestId;
  };

  const onAddEmployee = (newEmployee) => {
    const highestId = Number(findHighestId(data)) + 1;
    newEmployee.data.id = highestId;
    selectedNode.children = [...(selectedNode.children || []), newEmployee];
    setData([...data]);
    setShowForm(false);
  };

  return {
    data,
    nodeTemplate,
    showForm,
    onAddEmployee,
    setShowForm,
    findHighestId, // Add this line
  };
}

export default EmployeeNode;