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
function App() {
  const [currentMonth, setCurrentMonth] = useState(monthView());
  const [currentYear, setCurrentYear] = useState(monthView())
  const { monthIndex, year, daySelected } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(monthView(monthIndex, year))
    setCurrentYear(monthView(monthIndex,year))
  }, [monthIndex, year])

  return (
    <div className="App">
      <h3>Calendar</h3>
      <CalendarHeaderComponent/>
      <MonthViewComponent month={currentMonth} />
    </div>
  )
}

export default App
