import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  margin: 10px 0 30px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const NotFoundText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 500px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HomeButton = styled.button`
  padding: 12px 24px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #165fca;
  }
`;
