import styled from 'styled-components';

export const NodeModalMenu = styled.div`
  display: ${props => (props.$show ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 24px;
  background: white;
  padding: 8px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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