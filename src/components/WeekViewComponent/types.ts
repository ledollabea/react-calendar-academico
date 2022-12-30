import dayjs from "dayjs";
import { QalendarEvent } from "../DayComponent/types";

export interface IWeek {
  week:  dayjs.Dayjs[],
  events?: QalendarEvent[],
}