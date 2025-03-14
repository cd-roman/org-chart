import React from "react";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundText,
  HomeButton
} from "./NotFound.styles";

const NotFound: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      <NotFoundText>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </NotFoundText>
      <HomeButton onClick={handleGoHome}>Go to Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
