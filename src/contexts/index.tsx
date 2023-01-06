import { useState, useEffect } from "react";
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
  // CHOICE FOR EDIT EVENT
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [eventSelected, setEventSelected] = useState({});
  //SET SCREEN SIZE
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // CHOICE FOR LIST
  const [isLista, setIsLista] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <=  768);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
        isMobile,
        setIsMobile,
        showEditEventModal,
        setShowEditEventModal,
        eventSelected,
        setEventSelected,
        isLista,
        setIsLista
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
