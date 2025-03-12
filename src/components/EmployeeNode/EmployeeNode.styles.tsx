import styled from "styled-components";

export const EmployeeNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 56px;
  height: 56px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    pointer-events: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

export const EmployeeName = styled.span`
  font-weight: bold;
  white-space: nowrap;
`;

export const EmployeeTitle = styled.span`
  padding-top: 4px;
  white-space: nowrap;
`;
