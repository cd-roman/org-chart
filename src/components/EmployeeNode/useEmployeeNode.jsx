import React, { useState } from "react";
import initialData from "../../initialData.json";
import { EmployeeNode } from "./EmployeeNode";

function useEmployeeNode() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [data, setData] = useState(initialData);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const nodeTemplate = (node) => {
    return (
      <EmployeeNode
        node={node}
        deleteNode={deleteNode}
        editNode={editNode}
        setSelectedNode={setSelectedNode}
        setShowAddForm={setShowAddForm}
        setEditingEmployee={setEditingEmployee}
      />
    );
  };

  const findEmployee = (data, nodeId) => {
    for (let employee of data) {
      if (employee.data.id === nodeId) {
        return employee;
      }

      if (employee.children) {
        const found = findEmployee(employee.children, nodeId);
        if (found) {
          return found;
        }
      }
    }

    return null;
  };

  const editNode = (nodeId) => {
    const employee = findEmployee(data, nodeId);
    setEditingEmployee(employee);
    setShowEditForm(true);
  };

  const updateEmployee = (data, updatedEmployee) => {
    return data.map((employee) => {
      if (employee.data.id === updatedEmployee.data.id) {
        return updatedEmployee;
      }

      if (employee.children) {
        return {
          ...employee,
          children: updateEmployee(employee.children, updatedEmployee),
        };
      }

      return employee;
    });
  };

  const handleEditEmployee = (updatedEmployee) => {
    const newData = updateEmployee(data, updatedEmployee);
    setData(newData);
    setEditingEmployee(null);
    setShowEditForm(false);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

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
    setShowAddForm(false);
  };

  return {
    data,
    nodeTemplate,
    showAddForm,
    setShowAddForm,
    onAddEmployee,
    findHighestId,
    editingEmployee,
    setEditingEmployee,
    showEditForm,
    setShowEditForm,
    handleEditEmployee,
    handleCancelEdit,
  };
}

export default useEmployeeNode;
