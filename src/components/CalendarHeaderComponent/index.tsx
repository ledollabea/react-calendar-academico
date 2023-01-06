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
    setShowEventModal,
    setIsLista
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
    setIsLista(false);
    setMonthIndex(dayjs().month());
  };
  const handleWeekView = () => {
    setShowCalendarView(CalendarView.WEEK);
    setIsLista(false);
    setDaySelected(dayjs());
  };
  const handleDayView = () => {
    setShowCalendarView(CalendarView.DAY);
    setIsLista(false);
    setDaySelected(dayjs());
  };
  const handleNextWeek = () => {
    setDaySelected(daySelected.add(1, "week"));
  };
  const handlePreviousWeek = () => {
    setDaySelected(daySelected.subtract(1, "week"));
  };
  const handleNextDay = () => {
    setDaySelected(daySelected.add(1, "day"))
  }
  const handlePreviousDay = () => {
    setDaySelected(daySelected.subtract(1, "day"))
  }

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
          <button className="btn-lista" onClick={() => setIsLista(true)}> <p>Lista</p>
          </button>
        </h3>
        <div>
          <div className="dropdown">
            <FiCalendar className="dropbtn" />
            <div className="dropdown-content">
              <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleDayView}>Diário</button>
              <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleWeekView}>Semanal</button>
              <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleMonthView}>Mensal</button>
            </div>
          </div>
          <div className="dropdown">
            <FiFilter className="dropbtn" />
            <div className="dropdown-content">
              {showCalendarView == CalendarView.MONTH && (
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handlePreviousMonth}> Mês Anterior </button>
                )}
              {showCalendarView == CalendarView.WEEK && (
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handlePreviousWeek}> Semana Anterior </button>
                )}
               {showCalendarView == CalendarView.DAY && (
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handlePreviousDay}> Dia Anterior </button>
                )}
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleToday}>Hoje</button>
              {showCalendarView == CalendarView.MONTH && (
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleNextMonth}> Próximo Mês </button>
                )}
              {showCalendarView == CalendarView.WEEK && (
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleNextWeek}> Próxima Semana </button>
                )}
               
              {showCalendarView == CalendarView.DAY && (
                <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleNextDay}> Próximo dia </button>
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
            {showCalendarView == CalendarView.DAY && (
              <>
                <GrPrevious onClick={handlePreviousDay} />
                <GrNext onClick={handleNextDay} />
              </>
            )}
              <button className="btn-lista" onClick={() => setIsLista(true)}> <p>Lista</p>
              </button>
          </h3>
          </div>
      <div className="buttons-header">
        <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleDayView}>Diário</button>
        <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleWeekView}>Semanal</button>
        <button className={isMobile?"btn-header-mobile":"btn-header"} onClick={handleMonthView}>Mensal</button>
      </div>
      </Header>
     <button className="btn-newevent" onClick={handleClick}>
      <GoPlus/> Novo Evento
    </button>
    </>
    
  );
};

export default CalendarHeaderComponent;
