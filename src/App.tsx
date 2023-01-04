import dayjs from "dayjs";
import "./App.css";
import { dayView } from "./components/DayViewComponent/dayViewFunc";
import { weekView } from "./components/WeekViewComponent/weekViewFunc";
import { monthView } from "./components/MonthViewComponent/monthViewFunc";
import WeekViewComponent from "./components/WeekViewComponent";
import DayComponent from "./components/DayComponent";
import MonthViewComponent from "./components/MonthViewComponent";
import CalendarHeaderComponent from "./components/CalendarHeaderComponent";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./contexts/GlobalContext";
import EventModalComponent from "./components/EventModalComponent";
import DayViewComponent from "./components/DayViewComponent";
import { CalendarView } from "./contexts/types";
import { QalendarEvent } from "./components/DayComponent/types";
import HeaderDays from "./components/HeaderDays";
import EditEventModalComponent from "./components/EditEventModalComponent";
function App() {
  const [currentMonth, setCurrentMonth] = useState(monthView());
  const [currentYear, setCurrentYear] = useState(monthView());
  const [currentWeek, setCurrentWeek] = useState(weekView());
  const [currentDay, setCurrentDay] = useState(dayView());
  const { monthIndex, year, showEventModal, daySelected, showCalendarView, showEditEventModal } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(monthView(monthIndex, year));
    setCurrentYear(monthView(monthIndex, year));
    setCurrentWeek(weekView(daySelected));
    setCurrentDay(dayView(daySelected));
  }, [monthIndex, year, daySelected]);

  const eventsList: QalendarEvent[] = [
    {
      id: 1,
      description: "Sociologia da educação",
      date: dayjs(new Date(2022, 11, 30)),
      start: dayjs(new Date(2022, 11, 30, 20, 30)),
      end: dayjs(new Date(2022, 11, 30, 23, 0)),
      type: "aula"
    },
    {
      id: 2,
      description: "Palestra: Teste",
      date: dayjs(new Date(2022, 11, 30)),
      start: dayjs(new Date(2022, 11, 30, 21, 0)),
      end: dayjs(new Date(2022, 11, 30, 22, 0)),
      type: "evento"
    },
    {
      id: 3,
      description: "Dia de Algo",
      date: dayjs(new Date(2022, 11, 29)),
      start: dayjs(new Date(2022, 11, 29, 6, 30)),
      end: dayjs(new Date(2022, 11, 29, 8, 40)),
      type: "feriado"
    },
    {
      id: 4,
      description: "Artes",
      date: dayjs(new Date(2022, 11, 29)),
      start: dayjs(new Date(2022, 11, 29, 6, 0)),
      end: dayjs(new Date(2022, 11, 29, 6, 40)),
      type: "aula"
    },
    {
      id: 5,
      description: "Teoria Musical 2",
      date: dayjs(new Date(2022, 11, 29)),
      start: dayjs(new Date(2022, 11, 29, 10, 30)),
      end: dayjs(new Date(2022, 11, 29, 11, 0)),
      type: "aula"
    },
  ];

  const switchCalendarView = (calendarView: CalendarView) => {
    switch (calendarView) {
      case CalendarView.DAY:
        return (
          <DayViewComponent
            day={currentDay}
            onlyOneDay={false}
            events={eventsList}
          />
        );

      case CalendarView.WEEK:
        return <WeekViewComponent week={currentWeek} events={eventsList} />;

      case CalendarView.MONTH:
        return <MonthViewComponent month={currentMonth} events={eventsList} />;

      default:
        return <div>View not found</div>;
    }
  };


  return (
    <div className="App">
      {showEventModal && <EventModalComponent />}
      {showEditEventModal && <EditEventModalComponent/>}
      <h3>Qalendar</h3>
      <CalendarHeaderComponent />

      {showCalendarView == CalendarView.DAY ? (
        <HeaderDays days={[currentDay]} onlyOneDay={false} />
      ) : (
        <HeaderDays withoutHours={showCalendarView == CalendarView.MONTH} />
      )}

      <div
        style={{
          display: "flex",
          width: "100%",
          height: showCalendarView == CalendarView.MONTH ? "100%" : "",
        }}
      >
        {switchCalendarView(showCalendarView)}
      </div>
    </div>
  );
}

export default App;
