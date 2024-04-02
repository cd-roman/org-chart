import styled from "styled-components";

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 50%;
`;

export const DownloadButton = styled.button`
  cursor: pointer;
  z-index: 900;
  height: 32px;
  padding: 0 15px;
  background-color: #fff;
  border: 2px solid #1e6bd0;
  border-radius: 4px;
  color: #1e6bd0;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;

  i {
    padding-left: 8px;
    font-size: 16px;
  }

  &:hover {
    background-color: #1e6bd0;
    color: #fff;
  }
`;
