import styled from "styled-components";

export const ZoomControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  width: 50%;
`;

export const ZoomControlsButton = styled.button`
  cursor: pointer;
  z-index: 900;
  width: 28px;
  height: 28px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  i {
    font-size: 10px;
    font-weight: bold;
    color: #333;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #c0c0c0;
  }
`;
