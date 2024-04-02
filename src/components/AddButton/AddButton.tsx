import React from "react";
import AddNewEmployeeButton from "./AddButton.styles";

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

interface AddButtonProps {
  setSelectedNode: (node: Node) => void;
  setShowAddForm: (show: boolean) => void;
  node: Node;
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