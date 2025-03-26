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
        You can add, edit or remove employees, and then export your organization
        chart as PDF or JPEG.
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
        Download image
        <i className="pi pi-download" />
      </DownloadButton>
    </DownloadContainer>
  );
};

export default DownloadButtonsContainer;