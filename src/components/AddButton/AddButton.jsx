import React from "react";
import AddNewEmployeeButton from "./AddButton.styles";

function AddButton({ setSelectedNode, setShowAddForm, node }) {
  return (
    <AddNewEmployeeButton
      onClick={() => {
        setSelectedNode(node);
        setShowAddForm(true);
      }}
    >
      +
    </AddNewEmployeeButton>
  );
}

export default AddButton;
