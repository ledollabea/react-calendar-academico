import { IDay } from './types'
import { DayContainer, HeaderDay, DayToday } from './styles'
import dayjs from 'dayjs'
import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import EventModalComponent from '../EventModalComponent'
const DayComponent = ({ day }: IDay) => {
  const { setDaySelected } = useContext(GlobalContext)
  const handleClick = () => {
    setDaySelected(day);
    <EventModalComponent />
  }
  return (
    <DayContainer onClick={() => handleClick()}>
      <HeaderDay>
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
      </HeaderDay>
    </DayContainer>
  )
}

export default DayComponent