import dayjs from "dayjs";

export interface IDay {
  day: dayjs.Dayjs,
  onlyOneDay?: boolean,
  events?: any[],
  smallView?: boolean,
  dayView?:boolean
}

export interface QalendarEvent {
  id?: number;
  start?: dayjs.Dayjs;
  end?: dayjs.Dayjs;
  description?: string;
  date?: dayjs.Dayjs;
  type?: string;
}

export interface DailyQalendarEvent extends QalendarEvent {
  duration: number;
  conflicts: (number | null)[];
}