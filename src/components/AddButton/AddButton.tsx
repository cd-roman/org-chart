import React from "react";
import AddNewEmployeeButton from "./AddButton.styles";
import 'primeicons/primeicons.css';
import { EmployeeData } from "../../types";

interface AddButtonProps {
  setSelectedNode: (node: EmployeeData) => void;
  setShowAddForm: (show: boolean) => void;
  node: EmployeeData;
}

const AddButton: React.FC<AddButtonProps> = ({ setSelectedNode, setShowAddForm, node }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setSelectedNode(node);
    setShowAddForm(true);
  };

  return (
    <AddNewEmployeeButton onClick={handleClick}>
      <i className="pi pi-plus" />
    </AddNewEmployeeButton>
  );
}

export default AddButton;