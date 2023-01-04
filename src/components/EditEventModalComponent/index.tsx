import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import GlobalContext from "../../contexts/GlobalContext";
import { ModalContainer, FormModal, LabelForm } from "./styles";
import {BsTrash} from "react-icons/bs"

const EditEventModalComponent = () => {
  const { setShowEditEventModal, eventSelected } = useContext(GlobalContext);
  
  const [initialTime, setInitialTime] = useState(eventSelected.start!.format("YYYY-MM-DDTHH:mm"));
  const [finalTime, setFinalTime] = useState(eventSelected.end!.format("YYYY-MM-DDTHH:mm"));

  console.log(eventSelected)

  return createPortal(
    <>
      <ModalContainer onClick={() => setShowEditEventModal(false)} />
      <FormModal>
        <header>
          <button onClick={() => setShowEditEventModal(false)}>X</button>
          <button><BsTrash/></button>
        </header>
        <h3>Editar Evento</h3>
        <LabelForm htmlFor="">
            <textarea
              rows={4}
              cols={30}
              placeholder={eventSelected.description} maxLength={100}
              
            />
          </LabelForm>
          <LabelForm>
            <small>Tipo: </small>
            <select name="tipo" id="tipo" defaultValue={eventSelected.type}>
              <option value="aula">Aula</option>
              <option value="evento">Evento</option>
              <option value="feriado">Feriado</option>
            </select>
          </LabelForm>
          <LabelForm htmlFor="">
            <small>Inicio:</small>
            <input type="datetime-local" value={initialTime} onChange={(e) => setInitialTime(e.target.value)} />
          </LabelForm>
          <LabelForm htmlFor="">
            <small>Fim:</small>
          <input type="datetime-local" value={finalTime} onChange={(e) => setFinalTime(e.target.value)} />
          </LabelForm>
          <button>Criar Novo</button>
      </FormModal>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default EditEventModalComponent;
