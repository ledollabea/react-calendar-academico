import dayjs from "dayjs";

const weekView = (day: dayjs.Dayjs = dayjs()) => {
  const firstDayOfWeek = day.startOf('week');
  const CalendarWeekArray = new Array(7).fill(null).map((day, i) => {
        let currentDay = firstDayOfWeek.add(i,'day')
        return currentDay;
      });
  return CalendarWeekArray; 
}

export { weekView }