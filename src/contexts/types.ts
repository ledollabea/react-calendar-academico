import dayjs from "dayjs"
import { Dispatch, SetStateAction } from "react"

export interface IGlobalContext {
  monthIndex: number,
  setMonthIndex: Dispatch<SetStateAction<number>>,
  year: number,
  setYear: Dispatch<SetStateAction<number>>,
  daySelected: dayjs.Dayjs,
  setDaySelected: Dispatch<SetStateAction<dayjs.Dayjs>>,
  showEventModal: boolean,
  setShowEventModal: Dispatch<SetStateAction<boolean>>,
  showCalendarView: CalendarView,
  setShowCalendarView: Dispatch<SetStateAction<CalendarView>>,
}

export enum CalendarView {
  MONTH = 1,
  WEEK = 2,
  DAY = 3,
  SCHEDULE = 4,
  YEAR = 5
}