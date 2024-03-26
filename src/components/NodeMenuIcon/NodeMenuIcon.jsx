import React, { useState, useEffect, useRef } from "react";
import { KebabMenuButton, KebabIcon } from "./NodeMenuIcon.styles";
import NodeMenu from "../NodeMenu/NodeMenu";

function NodeMenuIcon({ deleteNode, editNode, nodeId, setEditingEmployee }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <KebabMenuButton onClick={() => setShowMenu(!showMenu)} ref={menuRef}>
      <KebabIcon />
      <KebabIcon />
      <KebabIcon />
      {showMenu && (
        <NodeMenu
          showMenu={showMenu}
          setEditingEmployee={setEditingEmployee}
          deleteNode={deleteNode}
          editNode={editNode}
          nodeId={nodeId}
        />
      )}
    </KebabMenuButton>
  );
}

export default NodeMenuIcon;
