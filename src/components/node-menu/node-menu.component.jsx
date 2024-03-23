import React from 'react';
import { NodeModalMenu, NodeModalMenuItem } from './node-menu.styles';

function EmployeeNodeMenu({ setEditingEmployee, editNode, employee, deleteNode, nodeId }) {
  return (
    <NodeModalMenu $show={true}>
      <NodeModalMenuItem onClick={() => { setEditingEmployee(employee); editNode(nodeId); }}>
        Edit
      </NodeModalMenuItem>
      <NodeModalMenuItem onClick={() => deleteNode(nodeId)}>
        Delete
      </NodeModalMenuItem>
    </NodeModalMenu>
  );
}

export default EmployeeNodeMenu;