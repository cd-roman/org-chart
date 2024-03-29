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
`;