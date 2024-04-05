import React from "react";
import { NodeModalMenu, NodeModalMenuItem } from "./NodeMenu.styles";
import { EmployeeData } from "../../types";

interface NodeMenuProps {
  setEditingEmployee: (employee: EmployeeData) => void;
  editNode: (nodeId: string) => void;
  employee: EmployeeData;
  deleteNode: (nodeId: string) => void;
  nodeId: string;
}

const NodeMenu: React.FC<NodeMenuProps> = ({
  setEditingEmployee,
  editNode,
  employee,
  deleteNode,
  nodeId,
}) => {
  return (
    <NodeModalMenu $show={true}>
      <NodeModalMenuItem
        onClick={() => {
          setEditingEmployee(employee);
          editNode(nodeId);
        }}
      >
        Edit
      </NodeModalMenuItem>
      <NodeModalMenuItem onClick={() => deleteNode(nodeId)}>
        Delete
      </NodeModalMenuItem>
    </NodeModalMenu>
  );
};

export default NodeMenu;
