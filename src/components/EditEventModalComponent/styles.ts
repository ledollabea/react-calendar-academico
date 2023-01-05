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

const Header = styled.header`
  display: flex;
  justify-content: right;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 5px 10px;
  justify-content: center;
`;

const Small = styled.small`
  width: 40px;
`;

const Creation = styled.button`
  border-radius: 5px;
  border: black 1px solid;
  background: transparent;
  padding: 5px 10px;
  margin-top: 10px;
  width: 100%;
`;

export {ModalContainer, FormModal, LabelForm, Header, Button, Small, Creation}