import { ReactElement, useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

const ContextWrapper = ({children}: {children: JSX.Element}) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [showWeekView, setShowWeekView] = useState(false);
  const [showMonthView, setShowMonthView] = useState(true);
  return (
    <GlobalContext.Provider value = {{monthIndex, setMonthIndex, year, setYear, daySelected, setDaySelected, showEventModal, setShowEventModal, showWeekView, setShowWeekView, showMonthView, setShowMonthView }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper