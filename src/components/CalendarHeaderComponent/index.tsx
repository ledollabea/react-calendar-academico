import dayjs from "dayjs"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import { Header } from "./styles"
import { FiCalendar, FiFilter } from "react-icons/fi";
import "./styles.css"
const CalendarHeaderComponent = () => {
  const { monthIndex, setMonthIndex, year, setYear, setShowWeekView, setShowMonthView, showWeekView, showMonthView, setDaySelected, daySelected } = useContext(GlobalContext)
  
  const handlePreviousMonth = () => {
    setMonthIndex(monthIndex - 1);
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  }
  const handleToday = () => {
    setMonthIndex(dayjs().month())
    setYear(dayjs().year())
    setDaySelected(dayjs())
  }
  const handleMonthView = () => {
    setShowWeekView(false)
    setShowMonthView(true)
    setMonthIndex(dayjs().month())
  }
  const handleWeekView = () => {
    setShowWeekView(true)
    setShowMonthView(false)
    setDaySelected(dayjs())
  }
  const handleNextWeek =() => {
    setDaySelected(daySelected.add(1,'week'))
  }
  const handlePreviousWeek =() => {
    setDaySelected(daySelected.subtract(1,'week'))
  }
  
  return (
    <Header>
      {/* <ButtonsContainer>
        <button onClick={handlePreviousYear}> {"<<"}  </button>
        <button onClick={handlePreviousMonth}> {"<"}  </button>
        <button onClick={handleToday}>Hoje</button>
        <button onClick={handleNextMonth}> {">"}  </button>
        <button onClick={handleNextYear}> {">>"}  </button>
      </ButtonsContainer>
      */}
      <h3>
        { showMonthView && dayjs(new Date(year, monthIndex)).format("MMMM, YYYY")}
        { showWeekView && daySelected.format("MMMM, YYYY")}
      </h3>
      <div>
        <div className="dropdown">
          <FiCalendar className="dropbtn"/>
          <div className="dropdown-content">
            <button >Diário</button>
            <button onClick={handleWeekView}>Semanal</button>
            <button onClick={handleMonthView}>Mensal</button>
          </div>
        </div>
        <div className="dropdown">
          <FiFilter className="dropbtn"/>
          <div className="dropdown-content">
            { showMonthView && <button onClick={handlePreviousMonth}> Mês Anterior  </button>}
            { showWeekView && <button onClick={handlePreviousWeek}> Semana Anterior  </button>}
            <button onClick={handleToday}>Hoje</button>
            { showMonthView && <button onClick={handleNextMonth}> Próximo Mês  </button>}
            { showWeekView && <button onClick={handleNextWeek}> Próxima Semana </button>}
          </div>
        </div>
      </div>
    </Header>
  )
}

export default CalendarHeaderComponent