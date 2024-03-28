import React, { useState, useEffect } from "react";
import { EmployeeNode } from "./EmployeeNode";
import apiService from "../../api/apiService";
import "../../api/mock";

function useEmployeeNode() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [data, setData] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get("/data");
        setData(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);

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

  const deleteNode = async (nodeId) => {
    if (data[0] && data[0].data.id === nodeId) {
      alert("You can't delete the root element");
      return; // Exit the function to prevent deletion of the root element
    }

    try {
      const response = await apiService.delete(`/employees/${nodeId}`);
      setData(response.data); // Update state with the returned, updated data structure
    } catch (error) {
      console.error("Error deleting the employee:", error);
    }
  };

  const onAddEmployee = async (newEmployee) => {
    const parentId = selectedNode ? selectedNode.data.id : null;
    try {
      const response = await apiService.post("/employees", {
        newEmployee,
        parentId,
      });

      // Directly use the updated data from the response
      setData(response.data);

      setShowAddForm(false); // Close the form
    } catch (error) {
      console.error("Error adding new employee:", error);
    }
  };

  return {
    data,
    nodeTemplate,
    showAddForm,
    setShowAddForm,
    onAddEmployee,
    editingEmployee,
    setEditingEmployee,
    showEditForm,
    setShowEditForm,
    handleEditEmployee,
    handleCancelEdit,
  };
}

export default useEmployeeNode;
