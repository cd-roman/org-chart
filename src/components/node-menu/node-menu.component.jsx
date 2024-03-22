import React from 'react';
import { NodeModalMenu, NodeModalMenuItem } from './node-menu.styles';

function EmployeeNodeMenu({ showMenu }) {
  return (
    <NodeModalMenu show={showMenu}>
      <NodeModalMenuItem>Edit</NodeModalMenuItem>
      <NodeModalMenuItem>Delete</NodeModalMenuItem>
    </NodeModalMenu>
  );
}

export default EmployeeNodeMenu;