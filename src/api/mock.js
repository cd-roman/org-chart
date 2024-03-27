// api/mock.js
import MockAdapter from "axios-mock-adapter";
import apiService from "./apiService";
import initialData from "../initialData.json";

const mock = new MockAdapter(apiService);

mock.onGet("/data").reply(200, initialData);

mock.onPost("/employees").reply((config) => {
  const { newEmployee, parentId } = JSON.parse(config.data);

  // Function to find the highest ID to ensure newEmployee has a unique ID
  const findHighestId = (nodes) => {
    return nodes.reduce((maxId, node) => {
      const currentMaxId = Math.max(maxId, parseInt(node.data.id));
      if (node.children) {
        return Math.max(currentMaxId, findHighestId(node.children));
      }
      return currentMaxId;
    }, 0);
  };

  // Assign a new unique ID to newEmployee
  newEmployee.data.id = findHighestId(initialData) + 1;

  // Function to integrate newEmployee into the data structure
  const integrateNewEmployee = (nodes, parentId, newEmployee) => {
    return nodes.map((node) => {
      if (node.data.id === parentId) {
        // Parent node found: add newEmployee to its children
        const updatedNode = {
          ...node,
          children: [...(node.children || []), newEmployee],
        };
        return updatedNode;
      } else if (node.children) {
        // Recursively search for the parent node in children
        const updatedNode = {
          ...node,
          children: integrateNewEmployee(node.children, parentId, newEmployee),
        };
        return updatedNode;
      }
      // Node is not the parent and has no children: leave it unchanged
      return node;
    });
  };

  // Update initialData with newEmployee integrated
  const updatedData = integrateNewEmployee(initialData, parentId, newEmployee);

  // For simplicity, we're directly mutating initialData here, but in a real app, we would update the backend data source
  initialData = updatedData;

  return [200, initialData];
});
