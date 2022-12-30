import { ReactElement, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { CalendarView } from "./types";

const ContextWrapper = ({ children }: { children: JSX.Element }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  //SET INITIAL VIEW
  const [showCalendarView, setShowCalendarView] = useState(CalendarView.MONTH);
  //////////////////
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        year,
        setYear,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        showCalendarView,
        setShowCalendarView,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
