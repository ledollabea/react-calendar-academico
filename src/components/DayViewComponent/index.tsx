import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import DayComponent from "../DayComponent";
import { DayHourBlock } from "../DayComponent/styles";
import { IDay } from "../DayComponent/types";
import HeaderDays from "../HeaderDays";
import HourColumnComponent from "../HourColumnComponent";
import ListDayComponent from "../ListDayComponent";

const DayViewComponent = ({ day, onlyOneDay, events }: IDay) => {
  const {isLista} = useContext(GlobalContext)
  const dayList = (onlyOneDay || isLista)
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
      {!isLista && <HourColumnComponent></HourColumnComponent>}
      {dayList.map((d: dayjs.Dayjs, i: number) => {
        return (
          !isLista && <DayComponent dayView={true} events={events} key={i} day={d} /> ||
          isLista && <ListDayComponent key={i} day={d} events={events} />
        )
      })}
    </>
  );
};

export default DayViewComponent;
