import styled from "styled-components";

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  p {
    font-size: 0.875rem;
    width: 180px;
    line-height: 1.5;
    color: #dedede;
  }
`;

export const DownloadButton = styled.button`
  cursor: pointer;
  width: 184px;
  z-index: 1;
  height: 32px;
  padding: 0 15px;
  background-color: #dedede;
  border: 1px solid#3f3f3f;
  border-radius: 4px;
  color: #181818;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;

  i {
    padding-left: 8px;
    font-size: 16px;
  }

  &:hover {
    background-color: #3f3f3f;
    color: #fff;
  }
`;
