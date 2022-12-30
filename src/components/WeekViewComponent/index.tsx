import DayComponent from "../DayComponent";
import HourColumnComponent from "../HourColumnComponent";
import { IWeek } from "./types";

const WeekViewComponent = ({ week, events = [] }: IWeek) => {
  const qWeek = week.map((day) => {
    return {
      day: day,
      events: events.filter((_) => _.date.day() == day.day()),
    };
  });

  return (
    <>
      <HourColumnComponent></HourColumnComponent>
      {qWeek.map((day, ind) => (
        <DayComponent key={ind} day={day.day} events={day.events} />
      ))}
    </>
  );
};

export default WeekViewComponent;
