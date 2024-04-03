import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

interface NodeModalMenuProps {
  $show: boolean;
}

export const NodeModalMenu = styled.div<NodeModalMenuProps>`
  display: ${(props) => (props.$show ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 24px;
  background: white;
  padding: 8px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.$show ? fadeIn : fadeOut)} 0.3s ease forwards;
  opacity: ${(props) => (props.$show ? "1" : "0")};
`;

export const NodeModalMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
`;
