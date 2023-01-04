import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import DayComponent from "../DayComponent";
import HourColumnComponent from "../HourColumnComponent";
import { IWeek } from "./types";
import NumberDaysComponent from "../NumberDaysComponent";
import ListDayComponent from "../ListDayComponent";

const WeekViewComponent = ({ week, events = [] }: IWeek) => {
  const { isMobile, } = useContext(GlobalContext)
  const qWeek = week.map((day) => {
    return {
      day: day,
      events: events.filter((_) => _.date!.day() == day.day()),
    };
  });


  return (
    <>
     {!isMobile && <HourColumnComponent />}
     {!isMobile && qWeek.map((day, ind) => (
        <DayComponent key={ind} day={day.day} events={day.events} smallView={isMobile} />
      ))}
      {isMobile && qWeek.map((day, ind) => (
        <NumberDaysComponent key={ind} day={day.day} />
      ))}
    </>
  );
};

export default WeekViewComponent;
