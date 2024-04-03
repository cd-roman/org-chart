import React from "react";
import "primeicons/primeicons.css";
import { SpinnerContainer } from "./Spinner.styles";

const Spinner: React.FC = () => (
  <SpinnerContainer>
    <i className="pi pi-spin pi-spinner"></i>
  </SpinnerContainer>
);

export default Spinner;