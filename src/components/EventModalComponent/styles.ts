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
  position: absolute;
  margin: auto;
  inset: 0;
  background: #fff;
  border: 1px solid #0000001c;
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  padding: 20px 30px;
  z-index: 3;
`;

const LabelForm = styled.label`
  display: flex;
  z-index: 3;
  margin-top: 5px;
  background: white;
`;


export {ModalContainer, FormModal, LabelForm}