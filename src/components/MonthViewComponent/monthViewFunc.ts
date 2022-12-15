import dayjs from "dayjs";

const monthView = (month:number = dayjs().month(), year:number = dayjs().year()) => {
  month = Math.floor(month);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentDayOfTheWeek = 0 - firstDayOfTheMonth;
  const CalendarMonthMatrix = new Array(5).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
        currentDayOfTheWeek++;
        return dayjs(new Date(year, month, currentDayOfTheWeek));
      })
  });
  return CalendarMonthMatrix; 
}

export { monthView }