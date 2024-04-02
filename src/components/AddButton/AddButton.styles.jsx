import styled from "styled-components";

const AddNewEmployeeButton = styled.button`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
  position: absolute;
  right: 8px;
  bottom: 8px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border: none;
  background: #1e6bd0;
  color: white;
  cursor: pointer;
`;

export default AddNewEmployeeButton;
