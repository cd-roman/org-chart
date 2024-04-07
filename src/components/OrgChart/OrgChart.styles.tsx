import styled from "styled-components";

export const OrgChartWorkspace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OrgChartContainer = styled.div`

  cursor: grab;

  &.orgchart-visible {
    visibility: visible;
  }

  &.orgchart-hidden {
    visibility: hidden;
  }
`;

export const StyledOrgChart = styled.div`
  .p-organizationchart-node-content {
    min-width: 150px;
    
    &:hover {
      button {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
      }
    }

    div {
      padding: 4px;
    }
  }
`;