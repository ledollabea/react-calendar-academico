import DayComponent from "../DayComponent";
import { DayHourBlock } from "../DayComponent/styles";
import { IDay } from "../DayComponent/types";
import HeaderDays from "../HeaderDays";
import HourColumnComponent from "../HourColumnComponent";

const DayViewComponent = ({ day, onlyOneDay, events }: IDay) => {
  const dayList = onlyOneDay
    ? [day]
    : [day.subtract(1, "day"), day, day.add(1, "day")];

  const hourList = [];

  for (let i = 0; i < 24; i++) {
    hourList.push({
      description: `${i < 10 ? "0" : ""}${i}`,
    });
  }

  return (
    <>
      <HourColumnComponent></HourColumnComponent>
      {dayList.map((d: any, i: number) => {
        return <DayComponent dayView={true} events={events} key={i} day={d} />;
      })}
    </>
  );
};

export default DayViewComponent;
