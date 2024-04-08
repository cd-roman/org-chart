import styled from "styled-components";

export const OrgChartWorkspace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 999px) {
    display: none;
  }
`;

export const OrgChartContainer = styled.div`
  padding: 0 10% 5%;
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
    min-width: 200px;

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

export const ResponsiveMessageContainer = styled.div`
  display: none;

  @media (max-width: 999px) {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export const ResponsiveMessage = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
`;