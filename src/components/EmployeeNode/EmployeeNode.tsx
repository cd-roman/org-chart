import React from "react";
import AddButton from "../AddButton/AddButton";
import NodeMenuIcon from "../NodeMenuIcon/NodeMenuIcon";

import {
  EmployeeNodeContainer,
  ImageContainer,
  EmployeeName,
  EmployeeTitle,
} from "./EmployeeNode.styles";

import { EmployeeData } from "../../types";


interface EmployeeNodeProps {
  node: EmployeeData;
  deleteNode: (id: string) => void;
  editNode: (node: EmployeeData) => void;
  setSelectedNode: (node: EmployeeData) => void;
  setShowAddForm: (show: boolean) => void;
  setEditingEmployee: (employee: EmployeeData) => void;
}

export const EmployeeNode: React.FC<EmployeeNodeProps> = ({
  node,
  deleteNode,
  editNode,
  setSelectedNode,
  setShowAddForm,
  setEditingEmployee,
}) => {
  return (
    <EmployeeNodeContainer>
      <NodeMenuIcon
        deleteNode={deleteNode}
        editNode={editNode}
        node={node}
        setEditingEmployee={setEditingEmployee}
      />
      <ImageContainer>
        <img src={node.data.avatar} alt={node.name} />
      </ImageContainer>
      <EmployeeName>{node.name}</EmployeeName>
      <EmployeeTitle>{node.data.title}</EmployeeTitle>
      <AddButton
        setSelectedNode={setSelectedNode}
        setShowAddForm={setShowAddForm}
        node={node}
      />
    </EmployeeNodeContainer>
  );
};