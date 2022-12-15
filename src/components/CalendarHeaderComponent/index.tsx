import dayjs from "dayjs"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import { ButtonsContainer } from "./styles"
const CalendarHeaderComponent = () => {
  const { monthIndex, setMonthIndex, year, setYear } = useContext(GlobalContext)
  
  const handlePreviousMonth = () => {
    setMonthIndex(monthIndex - 1);
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  }
  const handlePreviousYear = () => {
    setYear(year - 1);
  }
  const handleNextYear = () => {
    setYear(year + 1);
  }
  const handleToday = () => {
    setMonthIndex(dayjs().month())
    setYear(dayjs().year())
  }

  return (
    <header>
      <ButtonsContainer>
        <button onClick={handlePreviousYear}> {"<<"}  </button>
        <button onClick={handlePreviousMonth}> {"<"}  </button>
        <button onClick={handleToday}>Hoje</button>
        <button onClick={handleNextMonth}> {">"}  </button>
        <button onClick={handleNextYear}> {">>"}  </button>
      </ButtonsContainer>
      <ButtonsContainer>
        <button>Diário</button>
        <button>Semanal</button>
        <button>Mensal</button>
      </ButtonsContainer>
      <h2>
        {dayjs(new Date(year, monthIndex)).format("MMMM YYYY")}
      </h2>

    </header>
  )
}

export default CalendarHeaderComponent