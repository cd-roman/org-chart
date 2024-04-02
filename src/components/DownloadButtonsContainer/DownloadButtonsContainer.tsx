import React from "react";
import {
  DownloadContainer,
  DownloadButton,
} from "./DownloadButtonsContainer.styles";

interface DownloadButtonsContainerProps {
  onDownloadPDF: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDownloadImage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DownloadButtonsContainer: React.FC<DownloadButtonsContainerProps> = ({ onDownloadPDF, onDownloadImage }) => {
  return (
    <DownloadContainer>
      <DownloadButton onClick={onDownloadPDF}>
        Download PDF<i className="pi pi-download"></i>
      </DownloadButton>
      <DownloadButton onClick={onDownloadImage}>
        Download Image<i className="pi pi-download"></i>
      </DownloadButton>
    </DownloadContainer>
  );
};

export default DownloadButtonsContainer;