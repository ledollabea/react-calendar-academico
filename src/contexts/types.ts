import dayjs from "dayjs"
import { Dispatch, SetStateAction } from "react"

export interface IGlobalContext {
  monthIndex: number,
  setMonthIndex: Dispatch<SetStateAction<number>>,
  year: number,
  setYear: Dispatch<SetStateAction<number>>,
  daySelected: dayjs.Dayjs,
  setDaySelected:Dispatch<SetStateAction<dayjs.Dayjs>>,
}