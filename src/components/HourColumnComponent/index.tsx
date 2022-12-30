import { DayHourBlock } from "../DayComponent/styles";
import { IDay } from "../DayComponent/types";
import { HourColumn } from "./styles";

const HourColumnComponent = () => {
  const hourList = [];

  for (let i = 0; i < 24; i++) {
    hourList.push({
      description: `${i < 10 ? "0" : ""}${i}`,
    });
  }

  return (
    <HourColumn>
      {hourList.map((hour, i) => {
        return (
          <DayHourBlock key={i}>
            <small>{hour.description}</small>
          </DayHourBlock>
        );
      })}
    </HourColumn>
  );
};

export default HourColumnComponent;
