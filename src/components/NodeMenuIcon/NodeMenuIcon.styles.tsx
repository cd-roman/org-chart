import styled from 'styled-components';

export const KebabMenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 8px;
  top: 12px;
  border: none;
  background: transparent;
  cursor: pointer;

  i {
    font-size: 18px;
    color: #333;
  }
`;