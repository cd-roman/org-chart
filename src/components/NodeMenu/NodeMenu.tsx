import React from "react";
import { NodeModalMenu, NodeModalMenuItem } from "./NodeMenu.styles";
import { NodeObject } from "../../types";

interface NodeMenuProps {
  setEditingEmployee: (employee: NodeObject) => void;
  editNode: (nodeId: string) => void;
  employee: NodeObject;
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
