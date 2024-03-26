import React from "react";
import { NodeModalMenu, NodeModalMenuItem } from "./NodeMenu.styles";

function NodeMenu({
  setEditingEmployee,
  editNode,
  employee,
  deleteNode,
  nodeId,
}) {
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
}

export default NodeMenu;
