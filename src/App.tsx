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
function App() {
  const [currentMonth, setCurrentMonth] = useState(monthView());
  const [currentYear, setCurrentYear] = useState(monthView());
  const [currentWeek, setCurrentWeek] = useState(weekView());
  const [currentDay, setCurrentDay] = useState(dayView());
  const { monthIndex, year, showEventModal, daySelected, showCalendarView } =
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
      description: "Evento 1",
      date: dayjs(new Date(2022, 11, 30)),
      start: dayjs(new Date(2022, 11, 30, 20, 30)),
      end: dayjs(new Date(2022, 11, 30, 23, 0)),
    },
    {
      id: 2,
      description: "Evento 2",
      date: dayjs(new Date(2022, 11, 30)),
      start: dayjs(new Date(2022, 11, 30, 21, 0)),
      end: dayjs(new Date(2022, 11, 30, 22, 0)),
    },
    {
      id: 3,
      description: "Evento 3",
      date: dayjs(new Date(2022, 11, 29)),
      start: dayjs(new Date(2022, 11, 29, 6, 30)),
      end: dayjs(new Date(2022, 11, 29, 8, 40)),
    },
    {
      id: 4,
      description: "Evento 4",
      date: dayjs(new Date(2022, 11, 29)),
      start: dayjs(new Date(2022, 11, 29, 6, 0)),
      end: dayjs(new Date(2022, 11, 29, 6, 40)),
    },
    {
      id: 5,
      description: "Evento 5",
      date: dayjs(new Date(2022, 11, 29)),
      start: dayjs(new Date(2022, 11, 29, 10, 30)),
      end: dayjs(new Date(2022, 11, 29, 11, 0)),
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
