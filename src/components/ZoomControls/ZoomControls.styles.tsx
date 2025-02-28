import styled from "styled-components";

export const ZoomControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ZoomOutAndInContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const ResetZoomContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
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
    font-size: 14px;
    font-weight: medium;
    color: #333;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #c0c0c0;
  }
`;
