import React from 'react';
import AddNewEmployeeButton from './add-button.styles';

function AddButton ({ setSelectedNode, setShowForm, node })  {
    return (
        <AddNewEmployeeButton onClick={() => {
            setSelectedNode(node);
            setShowForm(true);
          }}>
        +
        </AddNewEmployeeButton>
    );
}

export default AddButton;