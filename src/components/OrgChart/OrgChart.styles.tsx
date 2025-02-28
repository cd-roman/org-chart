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
  margin-top: 40px;
  margin-left: 320px;

  .p-organizationchart-node-content {
    min-width: 200px;

    &:hover {
      button {
        opacity: 1;
        pointer-events: auto;
      }
    }

    div {
      padding: 4px;
    }
  }

  @media (min-width: 1400px) {
    margin-left: 400px;
  }

  @media (min-width: 1600px) {
    margin-left: 360px;
  }

  @media (min-width: 1900px) {
    margin-left: 320px;
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

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #333;
  color: #fff;
  z-index: 1;

  h1 {
    margin-top: 32px;
    color: #dedede;
  }

  .copyright {
    margin-bottom: 32px;
    color: #dedede;
    font-size: 0.875rem;
  }

  @media (max-width: 999px) {
    display: none;
  }
`;