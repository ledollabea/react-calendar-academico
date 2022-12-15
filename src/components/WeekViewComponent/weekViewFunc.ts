import dayjs from "dayjs";
import { monthView } from "../MonthViewComponent/monthViewFunc";
const weekView = (date: dayjs.Dayjs) => {
 const selectedWeek = monthView().filter((week, index) => {
   let teste = week.filter(dayOfWeek => dayOfWeek.format('DD-MM-YYYY')===(date.format('DD-MM-YYYY')))
   if (teste.length > 0) {
     return index
   }
 });
  return selectedWeek[0]
}

export { weekView }