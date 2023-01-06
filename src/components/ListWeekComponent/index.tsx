import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext';
import ListDayComponent from '../ListDayComponent';
import { IWeek } from '../WeekViewComponent/types'
import { Container, WeekContainer } from './styles';

const ListWeekComponent = ({ week, events = [] }: IWeek) => {
  const { isMobile, isLista } = useContext(GlobalContext)
  const Days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  const qWeek = week.map((day) => {
    return {
      day: day,
      events: events.filter((_) => _.date!.format("YYYY-MM-DD") === day.format("YYYY-MM-DD")),
    };
  });
  return (
    <Container>
       {
        (isMobile || isLista) &&
        <>
          <WeekContainer>
            <p>{Days[week[0].day()]+", " + week[0].format("DD") + " - "+ Days[week[6].day()]+", " + week[6].format("DD") }</p>
          </WeekContainer>
          {qWeek.map((day, ind) => (
              day.events.length > 0 &&
              <ListDayComponent key={ind} day={day.day} events={day.events} /> 
          ))
        }</>
    }
    </Container>
  )
    
}

export default ListWeekComponent