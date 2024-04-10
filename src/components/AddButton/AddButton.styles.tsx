import styled from "styled-components";

const AddNewEmployeeButton = styled.button`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  will-change: opacity;
  position: absolute;
  right: 8px;
  bottom: 8px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border: none;
  background: #1e6bd0;
  color: white;
  cursor: pointer;

  i {
    font-size: 12px;
    color: white;
    font-weight: bold;
    margin: auto;
  }
`;

export default AddNewEmployeeButton;
