import React from "react";
import {
  ZoomControlsContainer,
  ZoomControlsButton,
} from "./ZoomControls.styles.jsx";

const ZoomControls = ({ onZoomIn, onZoomOut }) => {
  return (
    <ZoomControlsContainer className="zoom-controls">
      <ZoomControlsButton onClick={onZoomIn}>+</ZoomControlsButton>
      <ZoomControlsButton onClick={onZoomOut}>-</ZoomControlsButton>
    </ZoomControlsContainer>
  );
};

export default ZoomControls;
