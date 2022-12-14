import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import DayComponent from "../DayComponent";
import HourColumnComponent from "../HourColumnComponent";
import { IWeek } from "./types";
import NumberDaysComponent from "../NumberDaysComponent";
import ListDayComponent from "../ListDayComponent";

const WeekViewComponent = ({ week, events = [] }: IWeek) => {
  const { isMobile, isLista } = useContext(GlobalContext)
  const qWeek = week.map((day) => {
    return {
      day: day,
      events: events.filter((_) => _.date!.day() == day.day()),
    };
  });


  return (
    <>
     {(!isMobile && !isLista) && <HourColumnComponent />}
     {(!isMobile && !isLista) && qWeek.map((day, ind) => (
        <DayComponent key={ind} day={day.day} events={day.events} smallView={isMobile} />
      ))}
     
    </>
  );
};

export default WeekViewComponent;
