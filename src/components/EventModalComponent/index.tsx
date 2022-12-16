import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import GlobalContext from '../../contexts/GlobalContext'
import { ModalContainer, FormModal, LabelForm } from './styles'

const EventModalComponent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {setShowEventModal, daySelected} = useContext(GlobalContext)
  return createPortal(
    <>  
      <ModalContainer onClick={() => setShowEventModal(false)}/>
      <FormModal>
        <header>
          <button onClick={() => setShowEventModal(false)}>X</button>
        </header>
        <h3>SOCORRO</h3>
        <>
          <LabelForm htmlFor="">
            <div></div>
            <input type="text" placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} />
          </LabelForm>
          <p>{daySelected.format('dddd, MMMM DD')}</p>
          <LabelForm htmlFor="">
            <div></div>
            <input type="number" max={24} />
            <input type="number" name="" id="" />
          </LabelForm>
          <LabelForm htmlFor="">
            <div></div>
            <input type="text" placeholder='Descrição' value={title} onChange={(e) => setTitle(e.target.value)} />
          </LabelForm>
        </>
      </FormModal>
  </>, document.getElementById("portal") as HTMLElement
  )
}

export default EventModalComponent