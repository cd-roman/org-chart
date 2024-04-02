import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: default;

  .modal-content {
    padding: 60px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1877f2;
  }
`;

export const FormImageInput = styled(FormInput)`
  padding: 0;
  border: none;

  &:focus {
    border: 1px solid #1877f2;
    outline: none;
  }
`;

export const FormButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px 0;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #165fca;
  }
`;

export const CancelButton = styled(FormButton)`
  background-color: #a0a0a0; // grey background
  color: #fff; // white text

  &:hover {
    background-color: #898989; // slightly darker grey on hover
  }
`;
