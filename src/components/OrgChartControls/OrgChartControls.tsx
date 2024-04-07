import React from "react";
import DownloadButtonsContainer from "../DownloadButtonsContainer/DownloadButtonsContainer";
import ZoomControls from "../ZoomControls/ZoomControls";
import { ControlsContainer } from "./OrgChartControls.styles";

interface OrgChartControlsProps {
  onDownloadPDF: () => void;
  onDownloadImage: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenterClick: () => void;
}

const OrgChartControls: React.FC<OrgChartControlsProps> = ({
  onDownloadPDF,
  onDownloadImage,
  onZoomIn,
  onZoomOut,
  onCenterClick,
}) => {
  return (
    <ControlsContainer>
      <DownloadButtonsContainer
        onDownloadPDF={onDownloadPDF}
        onDownloadImage={onDownloadImage}
      />
      <ZoomControls onZoomIn={onZoomIn} onZoomOut={onZoomOut} onCenterClick={onCenterClick} />
    </ControlsContainer>
  );
};

export default OrgChartControls;