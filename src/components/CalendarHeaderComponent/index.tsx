import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Header } from "./styles";
import { FiCalendar, FiFilter } from "react-icons/fi";
import "./styles.css";
import { CalendarView } from "../../contexts/types";
import { GrNext, GrPrevious } from "react-icons/gr";

const CalendarHeaderComponent = () => {
  const {
    monthIndex,
    setMonthIndex,
    year,
    setYear,
    showCalendarView,
    setShowCalendarView,
    setDaySelected,
    daySelected,
    isMobile
  } = useContext(GlobalContext);

  const handlePreviousMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleToday = () => {
    setMonthIndex(dayjs().month());
    setYear(dayjs().year());
    setDaySelected(dayjs());
  };
  const handleMonthView = () => {
    setShowCalendarView(CalendarView.MONTH);
    setMonthIndex(dayjs().month());
  };
  const handleWeekView = () => {
    setShowCalendarView(CalendarView.WEEK);
    setDaySelected(dayjs());
  };
  const handleDayView = () => {
    setShowCalendarView(CalendarView.DAY);
    setDaySelected(dayjs());
  };
  const handleNextWeek = () => {
    setDaySelected(daySelected.add(1, "week"));
  };
  const handlePreviousWeek = () => {
    setDaySelected(daySelected.subtract(1, "week"));
  };


  return (
    isMobile ?
    <Header>
      <h3>
        {showCalendarView == CalendarView.MONTH &&
          dayjs(new Date(year, monthIndex)).format("MMMM, YYYY")}
        {showCalendarView == CalendarView.WEEK &&
          daySelected.format("MMMM, YYYY")}
        {showCalendarView == CalendarView.DAY &&
          daySelected.format("MMMM, YYYY")}
      </h3>
      <div>
        <div className="dropdown">
          <FiCalendar className="dropbtn" />
          <div className="dropdown-content">
            <button onClick={handleDayView}>Diário</button>
            <button onClick={handleWeekView}>Semanal</button>
            <button onClick={handleMonthView}>Mensal</button>
          </div>
        </div>
        <div className="dropdown">
          <FiFilter className="dropbtn" />
          <div className="dropdown-content">
            {showCalendarView == CalendarView.MONTH && (
              <button onClick={handlePreviousMonth}> Mês Anterior </button>
            )}
            {showCalendarView == CalendarView.WEEK && (
              <button onClick={handlePreviousWeek}> Semana Anterior </button>
            )}
            <button onClick={handleToday}>Hoje</button>
            {showCalendarView == CalendarView.MONTH && (
              <button onClick={handleNextMonth}> Próximo Mês </button>
            )}
            {showCalendarView == CalendarView.WEEK && (
              <button onClick={handleNextWeek}> Próxima Semana </button>
            )}
          </div>
        </div>
      </div>
      </Header>
      :
      <Header>
        <div>
          <h3>
            {showCalendarView == CalendarView.MONTH &&
              dayjs(new Date(year, monthIndex)).format("MMMM, YYYY")}
            {showCalendarView == CalendarView.WEEK &&
              daySelected.format("MMMM, YYYY")}
            {showCalendarView == CalendarView.DAY &&
              daySelected.format("MMMM, YYYY")}
            
            {showCalendarView == CalendarView.MONTH && (
              <GrPrevious onClick={handlePreviousMonth} />
            )}
            {showCalendarView == CalendarView.WEEK && (
              <GrPrevious onClick={() => handlePreviousWeek} />
            )}
            {showCalendarView == CalendarView.MONTH && (
               <GrNext onClick={handleNextMonth} />
            )}
            {showCalendarView == CalendarView.WEEK && (
               <GrNext onClick={handleNextWeek} />
            )}
          </h3>
        </div>
      <div className="BLA">
        <button onClick={handleDayView}>Diário</button>
        <button onClick={handleWeekView}>Semanal</button>
        <button onClick={handleMonthView}>Mensal</button>
      </div>
      </Header>
    
  );
};

export default CalendarHeaderComponent;
