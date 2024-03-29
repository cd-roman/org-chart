import React from "react";
import {
  DownloadContainer,
  DownloadButton,
} from "./DownloadButtonsContainer.styles.jsx";

const DownloadButtonsContainer = ({ onDownloadPDF, onDownloadImage }) => {
  return (
    <DownloadContainer>
      <DownloadButton onClick={onDownloadPDF}>Download PDF</DownloadButton>
      <DownloadButton onClick={onDownloadImage}>Download Image</DownloadButton>
    </DownloadContainer>
  );
};

export default DownloadButtonsContainer;
