import dayjs from 'dayjs';
import './App.css';
import { weekView } from './components/WeekViewComponent/weekViewFunc';
import { monthView } from './components/MonthViewComponent/monthViewFunc';
import WeekViewComponent from './components/WeekViewComponent';
import DayComponent from './components/DayComponent';
import MonthViewComponent from './components/MonthViewComponent';
import CalendarHeaderComponent from './components/CalendarHeaderComponent';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from './contexts/GlobalContext';
import EventModalComponent from './components/EventModalComponent';
function App() {
  const [currentMonth, setCurrentMonth] = useState(monthView());
  const [currentYear, setCurrentYear] = useState(monthView());
  const [currentWeek, setCurrentWeek] = useState(weekView());
  const { monthIndex, year, showEventModal, daySelected, showMonthView, showWeekView } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(monthView(monthIndex, year))
    setCurrentYear(monthView(monthIndex,year))
    setCurrentWeek(weekView(daySelected))
  }, [monthIndex, year, daySelected])
  console.log(daySelected.add(1,'week'))
  return (
    <div className="App">
      {
        showEventModal && 
        <EventModalComponent />
      }
      <h3>Calendar</h3>
      <CalendarHeaderComponent/>
      
      { showMonthView && <MonthViewComponent month={currentMonth} /> }
      {showWeekView && <WeekViewComponent week={currentWeek}/>}
    </div>
  )
}

export default App
