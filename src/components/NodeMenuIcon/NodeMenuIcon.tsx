import React, { useState, useEffect, useRef } from "react";
import { KebabMenuButton } from "./NodeMenuIcon.styles";
import NodeMenu from "../NodeMenu/NodeMenu";
import { EmployeeData } from "../../types";
import 'primeicons/primeicons.css';

interface NodeMenuIconProps {
  node: EmployeeData;
  deleteNode: (id: string) => void;
  editNode: (node: EmployeeData) => void;
  setEditingEmployee: (employee: EmployeeData) => void;
}

const NodeMenuIcon: React.FC<NodeMenuIconProps> = ({ node, deleteNode, editNode, setEditingEmployee }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <KebabMenuButton onClick={() => setShowMenu(!showMenu)} ref={menuRef as React.RefObject<HTMLDivElement>}>
      <i className="pi pi-ellipsis-v" />
      {showMenu && (
        <NodeMenu
          employee={node}
          setEditingEmployee={setEditingEmployee}
          deleteNode={deleteNode}
          editNode={() => editNode(node)}
          nodeId={node.data.id}
        />
      )}
    </KebabMenuButton>
  );
}

export default NodeMenuIcon;