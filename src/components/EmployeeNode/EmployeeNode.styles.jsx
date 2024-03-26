import styled from 'styled-components';

export const EmployeeNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 48px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const EmployeeName = styled.span`
    font-weight: bold;
`;

export const EmployeeTitle = styled.span`  
    padding-top: 4px;
`;