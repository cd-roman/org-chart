import React, { useState, useEffect, useRef } from 'react';
import { KebabMenuButton, KebabIcon } from './node-menu-icon.styles';
import EmployeeNodeMenu from '../node-menu/node-menu.component';


function KebabMenu({ deleteNode, nodeId }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setShowMenu(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

      return (
        <KebabMenuButton onClick={() => setShowMenu(!showMenu)} ref={menuRef}>
          <KebabIcon />
          <KebabIcon />
          <KebabIcon />
          {showMenu && (
            <EmployeeNodeMenu showMenu={showMenu} deleteNode={deleteNode} nodeId={nodeId} />
          )}
        </KebabMenuButton>
      );
  }
  
export default KebabMenu;