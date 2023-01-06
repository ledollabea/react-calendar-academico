import dayjs from "dayjs"
import { Dispatch, SetStateAction } from "react"
import { QalendarEvent } from "../components/DayComponent/types"

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
  isMobile: boolean,
  setIsMobile: Dispatch<SetStateAction<boolean>>,
  showEditEventModal: boolean,
  setShowEditEventModal: Dispatch<SetStateAction<boolean>>,
  eventSelected: QalendarEvent,
  setEventSelected: Dispatch<SetStateAction<QalendarEvent>>,
  isLista: boolean,
  setIsLista: Dispatch<SetStateAction<boolean>>,
}

export enum CalendarView {
  MONTH = 1,
  WEEK = 2,
  DAY = 3,
  SCHEDULE = 4,
  YEAR = 5
}