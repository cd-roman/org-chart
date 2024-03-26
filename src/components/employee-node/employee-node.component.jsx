import React from "react";
import AddButton from "../add-button/add-button.component";
import KebabMenu from "../node-menu-icon/node-menu-icon.component";

import {
  EmployeeNodeContainer,
  ImageContainer,
  EmployeeName,
  EmployeeTitle,
} from "./employee-node-styles";

export function NodeTemplate({
  node,
  deleteNode,
  editNode,
  setSelectedNode,
  setShowAddForm,
  setEditingEmployee,
}) {
  return (
    <EmployeeNodeContainer>
      <KebabMenu
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
