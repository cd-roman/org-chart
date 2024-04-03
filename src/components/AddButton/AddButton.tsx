import React from "react";
import AddNewEmployeeButton from "./AddButton.styles";
import { NodeObject } from "../../types";

interface AddButtonProps {
  setSelectedNode: (node: NodeObject) => void;
  setShowAddForm: (show: boolean) => void;
  node: NodeObject;
}

const AddButton: React.FC<AddButtonProps> = ({ setSelectedNode, setShowAddForm, node }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setSelectedNode(node);
    setShowAddForm(true);
  };

  return (
    <AddNewEmployeeButton onClick={handleClick}>
      +
    </AddNewEmployeeButton>
  );
}

export default AddButton;