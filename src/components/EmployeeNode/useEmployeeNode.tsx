import React, { useState, useEffect } from "react";
import { EmployeeNode } from "./EmployeeNode";
import apiService from "../../api/apiService";
import "../../api/mock";

import { EmployeeData, NewEmployeeData } from "../../types";

function useEmployeeNode() {
  const [selectedNode, setSelectedNode] = useState<EmployeeData | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [data, setData] = useState<EmployeeData[]>([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<EmployeeData | null>(null);

  const fetchData = async () => {
    try {
      const response = await apiService.get<EmployeeData[]>("/data");
      setData(response.data); // Set the fetched data to the state
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nodeTemplate = (node: EmployeeData) => {
    return (
      <EmployeeNode
        node={node}
        deleteNode={deleteNode}
        editNode={() => editNode(node.data.id)}
        setSelectedNode={setSelectedNode}
        setShowAddForm={setShowAddForm}
        setEditingEmployee={setEditingEmployee}
      />
    );
  };

  const findEmployee = (data: EmployeeData[], nodeId: string): EmployeeData | null => {
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

  const editNode = (nodeId: string) => {
    const employee = findEmployee(data, nodeId);
    if (employee) {
      setEditingEmployee(employee);
      setShowEditForm(true);
    }
  };

  const handleEditEmployee = async (updatedEmployee: EmployeeData) => {
    try {
      const employeeId = String(updatedEmployee.data.id);
  
      const response = await apiService.patch<EmployeeData[]>(
        `/employees/${employeeId}`,
        updatedEmployee
      );
      setData(response.data);
      setEditingEmployee(null);
      setShowEditForm(false);
    } catch (error) {
      console.error("Error updating the employee:", error);
    }
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  const deleteNode = async (nodeId: string) => {
    if (data[0] && data[0].data.id === nodeId) {
      alert("You can't delete the root element");
      return; // Exit the function to prevent deletion of the root element
    }

    try {
      const response = await apiService.delete<EmployeeData[]>(`/employees/${nodeId}`);
      setData(response.data); // Update state with the returned, updated data structure
    } catch (error) {
      console.error("Error deleting the employee:", error);
    }
  };

  const onAddEmployee = async (newEmployee: NewEmployeeData) => {
    const parentId = selectedNode ? selectedNode.data.id : null;
    try {
      const response = await apiService.post<EmployeeData[]>("/employees", {
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
