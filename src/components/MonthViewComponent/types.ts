import dayjs from "dayjs";
import { QalendarEvent } from "../DayComponent/types";

export interface IMonth {
  month: Array<Array<dayjs.Dayjs>>,
  events?: QalendarEvent[],
}