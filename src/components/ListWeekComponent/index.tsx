import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext';
import ListDayComponent from '../ListDayComponent';
import { IWeek } from '../WeekViewComponent/types'
import { Container } from './styles';

const ListWeekComponent = ({ week, events = [] }: IWeek) => {
  const {isMobile} = useContext(GlobalContext)
  const qWeek = week.map((day) => {
    return {
      day: day,
      events: events.filter((_) => _.date!.day() == day.day()),
    };
  });
  return (
    <Container>
       {
       isMobile && qWeek.map((day, ind) => (
         <ListDayComponent key={ind} day={day.day} events={ day.events } />
        ))
    }
    </Container>
  )
    
}

export default ListWeekComponent