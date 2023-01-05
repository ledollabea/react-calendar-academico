import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import GlobalContext from "../../contexts/GlobalContext";
import { ModalContainer, FormModal, LabelForm, Header, Button, Small, Creation } from "./styles";
import { BsTrash } from "react-icons/bs";

const EditEventModalComponent = () => {
  const { setShowEditEventModal, eventSelected } = useContext(GlobalContext);
  
  const [initialTime, setInitialTime] = useState(eventSelected.start!.format("YYYY-MM-DDTHH:mm"));
  const [finalTime, setFinalTime] = useState(eventSelected.end!.format("YYYY-MM-DDTHH:mm"));

  return createPortal(
    <>
      <ModalContainer onClick={() => setShowEditEventModal(false)} />
      <FormModal>
        <Header>
          <Button><BsTrash/></Button>
          <Button onClick={() => setShowEditEventModal(false)}>X</Button>
        </Header>
        <h3>Editar Evento</h3>
        <LabelForm htmlFor="">
            <textarea
              rows={4}
              cols={30}
              placeholder={eventSelected.description} maxLength={100}
            />
          </LabelForm>
          <LabelForm>
          <Small>Tipo:</Small>
            <select name="tipo" id="tipo" defaultValue={eventSelected.type}>
              <option value="aula">Aula</option>
              <option value="evento">Evento</option>
              <option value="feriado">Feriado</option>
            </select>
          </LabelForm>
          <LabelForm htmlFor="">
            <Small>Inicio:</Small>
            <input type="datetime-local" value={initialTime} onChange={(e) => setInitialTime(e.target.value)} />
          </LabelForm>
          <LabelForm htmlFor="">
            <Small>Fim:</Small>
          <input type="datetime-local" value={finalTime} onChange={(e) => setFinalTime(e.target.value)} />
          </LabelForm>
          <Creation>
            Editar
         </Creation>
      </FormModal>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default EditEventModalComponent;
