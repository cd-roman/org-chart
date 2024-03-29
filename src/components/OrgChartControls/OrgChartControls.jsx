import React from "react";
import DownloadButtonsContainer from "../DownloadButtonsContainer/DownloadButtonsContainer";
import ZoomControls from "../ZoomControls/ZoomControls";
import { ControlsContainer } from "./OrgChartControls.styles";

const OrgChartControls = ({
  onDownloadPDF,
  onDownloadImage,
  onZoomIn,
  onZoomOut,
}) => {
  return (
    <ControlsContainer>
      <DownloadButtonsContainer
        onDownloadPDF={onDownloadPDF}
        onDownloadImage={onDownloadImage}
      />
      <ZoomControls onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
    </ControlsContainer>
  );
};

export default OrgChartControls;