import React, { useState, useEffect, useRef } from "react";
import { KebabMenuButton, KebabIcon } from "./NodeMenuIcon.styles";
import NodeMenu from "../NodeMenu/NodeMenu";
import { NodeObject } from "../../types";

interface NodeMenuIconProps {
  node: NodeObject;
  deleteNode: (id: string) => void;
  editNode: (node: NodeObject) => void;
  setEditingEmployee: (employee: NodeObject) => void;
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
      <KebabIcon />
      <KebabIcon />
      <KebabIcon />
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