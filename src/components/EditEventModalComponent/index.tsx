import { useContext } from "react";
import { createPortal } from "react-dom";
import GlobalContext from "../../contexts/GlobalContext";
import { ModalContainer, FormModal } from "./styles";

const EditEventModalComponent = () => {
  const { setShowEditEventModal } = useContext(GlobalContext);



  return createPortal(
    <>
      <ModalContainer onClick={() => setShowEditEventModal(false)} />
      <FormModal>
        <header>
          <button onClick={() => setShowEditEventModal(false)}>X</button>
        </header>
       <h3>TESTE</h3>
      </FormModal>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default EditEventModalComponent;
