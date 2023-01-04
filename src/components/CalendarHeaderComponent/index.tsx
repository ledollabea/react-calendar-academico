import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Header } from "./styles";
import { FiCalendar, FiFilter } from "react-icons/fi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import "./styles.css";
import { CalendarView } from "../../contexts/types";

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
    isMobile, 
    showEventModal,
    setShowEventModal
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

  const handleClick = () => {
    setShowEventModal(true)
  }


  return (
    isMobile ?
    <>
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
              <button className="btn-header" onClick={handleDayView}>Diário</button>
              <button className="btn-header" onClick={handleWeekView}>Semanal</button>
              <button className="btn-header" onClick={handleMonthView}>Mensal</button>
            </div>
          </div>
          <div className="dropdown">
            <FiFilter className="dropbtn" />
            <div className="dropdown-content">
              {showCalendarView == CalendarView.MONTH && (
                <button className="btn-header" onClick={handlePreviousMonth}> Mês Anterior </button>
                )}
              {showCalendarView == CalendarView.WEEK && (
                <button className="btn-header" onClick={handlePreviousWeek}> Semana Anterior </button>
                )}
                <button className="btn-header" onClick={handleToday}>Hoje</button>
              {showCalendarView == CalendarView.MONTH && (
                <button className="btn-header" onClick={handleNextMonth}> Próximo Mês </button>
                )}
              {showCalendarView == CalendarView.WEEK && (
                <button className="btn-header" onClick={handleNextWeek}> Próxima Semana </button>
                )}
            </div>
          </div>
        </div>
        </Header>
        <button className="btn-newevent" onClick={handleClick}>
         <GoPlus/> Novo Evento
        </button>
      </>
      :
      <>
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
              <>
                <GrPrevious onClick={handlePreviousMonth} />
                <GrNext onClick={handleNextMonth} />
              </>
            )}
            {showCalendarView == CalendarView.WEEK && (
              <>
                <GrPrevious onClick={handlePreviousWeek} />
                <GrNext onClick={handleNextWeek} />
              </>
            )}
          </h3>
        </div>
      <div className="BLA">
        <button className="btn-header" onClick={handleDayView}>Diário</button>
        <button className="btn-header" onClick={handleWeekView}>Semanal</button>
        <button className="btn-header" onClick={handleMonthView}>Mensal</button>
      </div>
      </Header>
     <button className="btn-newevent" onClick={handleClick}>
      <GoPlus/> Novo Evento
    </button>
    </>
    
  );
};

export default CalendarHeaderComponent;
