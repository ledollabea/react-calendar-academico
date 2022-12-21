import { IDay } from './types'
import { DayContainer, DayToday } from './styles'
import dayjs from 'dayjs'
import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import EventModalComponent from '../EventModalComponent'
const DayComponent = ({ day }: IDay) => {
  const { setDaySelected, setShowEventModal, daySelected } = useContext(GlobalContext)
  
  const handleClick = () => {
    setDaySelected(day);
    // setShowEventModal(true);
  }
  console.log(daySelected)

  return (
    <DayContainer onClick={() => handleClick()}>
        {
          day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? 
          <DayToday>
              <small>
              {day.format('DD')}
              </small>
            </DayToday>
            :
            <>
               <small>
              {day.format('DD')}
              </small>
            </>
        }
    </DayContainer>
  )
}

export default DayComponent