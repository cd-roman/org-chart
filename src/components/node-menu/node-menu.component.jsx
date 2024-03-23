import React from 'react';
import { NodeModalMenu, NodeModalMenuItem } from './node-menu.styles';

function EmployeeNodeMenu({ showMenu, deleteNode, nodeId }) {
  return (
    <NodeModalMenu $show={true}>
      <NodeModalMenuItem>
        Edit
      </NodeModalMenuItem>
      <NodeModalMenuItem onClick={() => deleteNode(nodeId)}>
        Delete
      </NodeModalMenuItem>
    </NodeModalMenu>
  );
}

export default EmployeeNodeMenu;