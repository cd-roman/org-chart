import React from "react";
import AddButton from "../AddButton/AddButton";
import NodeMenuIcon from "../NodeMenuIcon/NodeMenuIcon";

import {
  EmployeeNodeContainer,
  ImageContainer,
  EmployeeName,
  EmployeeTitle,
} from "./EmployeeNode.styles";

export function EmployeeNode({
  node,
  deleteNode,
  editNode,
  setSelectedNode,
  setShowAddForm,
  setEditingEmployee,
}) {
  return (
    <EmployeeNodeContainer>
      <NodeMenuIcon
        deleteNode={deleteNode}
        editNode={editNode}
        nodeId={node.data.id}
        setEditingEmployee={setEditingEmployee}
      />
      <ImageContainer>
        <img src={node.data.avatar} alt={node.label} />
      </ImageContainer>
      <EmployeeName>{node.name}</EmployeeName>
      <EmployeeTitle>{node.data.title}</EmployeeTitle>
      <AddButton
        className="add-button"
        setSelectedNode={setSelectedNode}
        setShowAddForm={setShowAddForm}
        node={node}
      />
    </EmployeeNodeContainer>
  );
}
