import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import DayComponent from '../DayComponent'
import HeaderDays from '../HeaderDays'
import { MonthContainer, RowContainer } from './styles'
import { IMonth } from './types'

const MonthViewComponent = ({ month }: IMonth) => {

    return (
    <MonthContainer>
      <>
        <HeaderDays/>
        {
        month.map((row, i) => (
          <RowContainer key={i}>
              {row.map((day, ind) => 
                  <DayComponent key={ind} day={day} />
                  )}
            </RowContainer>
          ))
        }
      </>
    </MonthContainer>
  )
}

export default MonthViewComponent