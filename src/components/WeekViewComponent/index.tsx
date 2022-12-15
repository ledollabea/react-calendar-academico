import DayComponent from "../DayComponent"
import HeaderDays from "../HeaderDays"
import { IWeek } from "./types"

const WeekViewComponent = ({ week }: IWeek) => {
  const STYLE_DIV = {
    display: "flex"
  }
  return (
    <>
      <HeaderDays />
      <div style={STYLE_DIV}>
        {week.map((day, ind) => <DayComponent key={ind} day={day} />)}
      </div>
    </>
  )
}

export default WeekViewComponent