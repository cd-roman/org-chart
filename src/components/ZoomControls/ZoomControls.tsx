import React from 'react';
import 'primeicons/primeicons.css';
import {
  ZoomControlsContainer,
  ZoomControlsButton,
} from './ZoomControls.styles';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <ZoomControlsContainer className="zoom-controls">
      <ZoomControlsButton onClick={onZoomIn}>
        <i className="pi pi-plus"></i>
      </ZoomControlsButton>
      <ZoomControlsButton onClick={onZoomOut}>
        <i className="pi pi-minus"></i>
      </ZoomControlsButton>
    </ZoomControlsContainer>
  );
};

export default ZoomControls;