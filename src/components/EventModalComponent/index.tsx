import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import GlobalContext from "../../contexts/GlobalContext";
import { ModalContainer, FormModal, LabelForm } from "./styles";

const EventModalComponent = () => {
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [initialTime, setInitialTime] = useState(daySelected.format("YYYY-MM-DDTHH:mm"));
  const [finalTime, setFinalTime] = useState("");



  return createPortal(
    <>
      <ModalContainer onClick={() => setShowEventModal(false)} />
      <FormModal>
        <header>
          <button onClick={() => setShowEventModal(false)}>X</button>
        </header>
        <h3>Novo Evento</h3>
        <>
          <LabelForm htmlFor="">
            <textarea
              rows={4}
              cols={30}
              placeholder="Descrição" maxLength={100}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </LabelForm>
          <LabelForm>
            <small>Tipo: </small>
            <select name="tipo" id="tipo">
              <option value="aula">Aula</option>
              <option value="evento">Evento</option>
              <option value="feriado">Feriado</option>
            </select>
          </LabelForm>
          <LabelForm htmlFor="">
            <small>Inicio:</small>
            <input type="datetime-local" onChange={(e) => setInitialTime(e.target.value)} value={initialTime} />
          </LabelForm>
          <LabelForm htmlFor="">
            <small>Fim:</small>
            <input type="datetime-local"  onChange={(e) => setFinalTime(e.target.value)} value={finalTime}/>
          </LabelForm>
          <button>Criar Novo</button>
        </>
      </FormModal>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default EventModalComponent;
