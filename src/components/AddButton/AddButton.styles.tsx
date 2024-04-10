import styled from "styled-components";

const AddNewEmployeeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  will-change: opacity;
  pointer-events: none;
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
  padding: 0;

  i {
    margin: auto;
    font-size: 12px;
    color: white;
    font-weight: bold;
    padding: 0;
  }
`;

export default AddNewEmployeeButton;
