import styled from "styled-components";

export const EditModal = styled.div`
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

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 96px;
  height: 96px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 48px;
  }
`;

export const EditFormInput = styled.input`
  margin-bottom: 20px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.85rem;

  &:focus {
    outline: none;
    border-color: #1877f2;
  }
`;

export const FormImageInput = styled(EditFormInput)`
  padding: 0;
  border: none;

  &:focus {
    border: 1px solid #1877f2;
    outline: none;
  }
`;

export const EditFormButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px 0;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.85rem;

  &:hover {
    background-color: #165fca;
  }
`;

export const CancelButton = styled(EditFormButton)`
  background-color: #a0a0a0;
  color: #fff;

  &:hover {
    background-color: #898989;
  }
`;
