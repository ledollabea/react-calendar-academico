import { DaysRow, DayToday, DivTest } from "../DayComponent/styles";
import { IDay } from "../DayComponent/types";
import dayjs from "dayjs";



const NumberDaysComponent = ({ day }: IDay) => {
  
  return (
    <DivTest>
      <>
      <DaysRow>
        {day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? (
          <DayToday>
            <small>{day.format("DD")}</small>
          </DayToday>
        ) : (
          <div>
            <small>{day.format("DD")}</small>
          </div>
        )}
      </DaysRow>
    </>
    </DivTest>
     
  )
}

export default NumberDaysComponent