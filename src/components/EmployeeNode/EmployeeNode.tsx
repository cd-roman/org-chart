import React from "react";
import AddButton from "../AddButton/AddButton";
import NodeMenuIcon from "../NodeMenuIcon/NodeMenuIcon";

import {
  EmployeeNodeContainer,
  ImageContainer,
  EmployeeName,
  EmployeeTitle,
} from "./EmployeeNode.styles";

interface Node {
  name: string;
  expanded: boolean;
  data: {
    id: string;
    avatar: string;
    title: string;
  };
  children?: Node[];
}

interface EmployeeNodeProps {
  node: Node;
  deleteNode: (id: string) => void;
  editNode: (node: Node) => void;
  setSelectedNode: (node: Node) => void;
  setShowAddForm: (show: boolean) => void;
  setEditingEmployee: (employee: Node) => void;
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
        nodeId={node.data.id}
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