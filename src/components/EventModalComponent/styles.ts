import styled from "styled-components";

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(0,0,0, 0.3);
`;

const FormModal = styled.form`
  position: fixed;
  top: 50%;
  left: 10%;
  background: white;
  box-shadow: 3px;
  border: 1px solid black;
  height: fit-content;
  width: fit-content;
  padding: 10px;
  position: fixed;
  z-index: 2;
`;

const LabelForm = styled.label`
  display: flex;

`;


export {ModalContainer, FormModal, LabelForm}