// api/mock.js
import MockAdapter from "axios-mock-adapter";
import apiService from "./apiService";
import initialData from "../initialData.json";

const mock = new MockAdapter(apiService);

mock.onGet("/data").reply(200, initialData);

mock.onPost("/employees").reply((config) => {
  const { newEmployee, parentId } = JSON.parse(config.data);

  // Function to find the highest ID to ensure newEmployee has a unique ID
  const generateNewId = (data) => {
    const findHighestId = (nodes) => {
      return nodes.reduce((maxId, node) => {
        const currentMaxId = Math.max(maxId, parseInt(node.data.id));
        if (node.children) {
          return Math.max(currentMaxId, findHighestId(node.children));
        }
        return currentMaxId;
      }, 0);
    };

    const highestId = findHighestId(data);
    return String(highestId + 1);
  };

  // Assign a new unique ID to newEmploye
  newEmployee.data.id = generateNewId(initialData);

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

const findAndDeleteNode = (nodes, nodeId, parent) => {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].data.id === nodeId) {
      parent.children.splice(i, 1, ...(nodes[i].children || []));
      break; // Node found and handled, exit the loop
    } else if (nodes[i].children) {
      // If the current node is not the one to be deleted but has children,
      // recursively call findAndDeleteNode on its children.
      nodes[i].children = findAndDeleteNode(
        nodes[i].children,
        nodeId,
        nodes[i]
      );
    }
  }
  return nodes;
};

mock.onDelete(/\/employees\/\d+/).reply((config) => {
  const idToDelete = config.url.match(/\d+/)[0]; // Extract the ID to delete
  initialData = findAndDeleteNode([...initialData], idToDelete); // Apply the function to a cloned array of initialData
  return [200, initialData]; // Return the updated data structure
});

mock.onPatch(/\/employees\/(.+)/).reply((config) => {
  const id = config.url.match(/\/employees\/(.+)/)[1];
  const updatedEmployee = JSON.parse(config.data);

  // Function to recursively update the employee in the data structure
  const updateEmployeeInData = (nodes, updatedEmployee) => {
    return nodes.map((node) => {
      if (node.data.id === id) {
        // Found the node to update
        return { ...node, ...updatedEmployee }; // Merge updated fields
      } else if (node.children) {
        // Recursively update children
        return {
          ...node,
          children: updateEmployeeInData(node.children, updatedEmployee),
        };
      }
      return node;
    });
  };

  // Update the employee in the initialData structure
  initialData = updateEmployeeInData(initialData, updatedEmployee);

  // Respond with the updated data structure
  return [200, initialData];
});
