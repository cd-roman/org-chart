import styled from 'styled-components';

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
  background-color: rgba(0,0,0,0.4);

  .modal-content {
    padding: 48px;
    background-color: #fefefe;
    border: 1px solid #888;
    width: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  margin-bottom: 16px;
  width: 200px;
`;

export const FormButton = styled.button`
  margin-top: 20px;
  max-width: 160px;
  background-color: #898989;
  color: white;
`;