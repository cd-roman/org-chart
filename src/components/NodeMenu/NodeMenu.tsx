import React from "react";
import { NodeModalMenu, NodeModalMenuItem } from "./NodeMenu.styles";

interface NodeMenuProps {
  setEditingEmployee: (employee: Node) => void;
  editNode: (nodeId: string) => void;
  employee: Node;
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
