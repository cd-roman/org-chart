import React from "react";
import ZoomControls from "../ZoomControls/ZoomControls";
import { ControlsContainer } from "./OrgChartControls.styles";

interface OrgChartControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenterClick: () => void;
}

const OrgChartControls: React.FC<OrgChartControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onCenterClick,
}) => {
  return (
    <ControlsContainer>
      <ZoomControls
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onCenterClick={onCenterClick}
      />
    </ControlsContainer>
  );
};

export default OrgChartControls;
