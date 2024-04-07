import React from 'react';
import 'primeicons/primeicons.css';
import {
  ZoomControlsContainer,
  ZoomOutAndInContainer,
  ResetZoomContainer,
  ZoomControlsButton,
} from './ZoomControls.styles';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenterClick: () => void;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onZoomIn, onZoomOut, onCenterClick }) => {
  return (
    <ZoomControlsContainer className="zoom-controls">
      <ZoomOutAndInContainer>
        <ZoomControlsButton onClick={onZoomIn}>
          <i className="pi pi-plus" />
        </ZoomControlsButton>
        <ZoomControlsButton onClick={onZoomOut}>
          <i className="pi pi-minus" />
        </ZoomControlsButton>
      </ZoomOutAndInContainer>
      <ResetZoomContainer>
        <ZoomControlsButton onClick={onCenterClick}>
          <i className="pi pi-arrows-alt" />
        </ZoomControlsButton>
      </ResetZoomContainer>
    </ZoomControlsContainer>
  );
};

export default ZoomControls;