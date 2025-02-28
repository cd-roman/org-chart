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
      <p>
        Export your organization chart in one of two available formats: PDF or
        JPEG.
      </p>
      <p>
        Downloads capture the entire chart regardless of current zoom level or
        scroll position.
      </p>
      <DownloadButton onClick={onDownloadPDF}>
        Download PDF
        <i className="pi pi-download" />
      </DownloadButton>
      <DownloadButton onClick={onDownloadImage}>
        Download Image
        <i className="pi pi-download" />
      </DownloadButton>
    </DownloadContainer>
  );
};

export default DownloadButtonsContainer;