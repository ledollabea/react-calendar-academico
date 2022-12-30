import React from "react";
import { Header, NameDay } from "./styles";
import dayjs from "dayjs";

const HeaderDays = (props: any) => {
  let weekDaysNames = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  let dayList = props.days;

  if (dayList?.length == 1 && !props.onlyOneDay) {
    dayList = [
      dayList[0].subtract(1, "day"),
      dayList[0],
      dayList[0].add(1, "day"),
    ];
  }

  let weekDaysToShow = dayList
    ? dayList.map((_: any) => _.day())
    : weekDaysNames.map((day, index) => index);
  let nameSize = props.nameSize ?? 3;
  return (
    <Header
      style={props.withoutHours ? { paddingLeft: "0px", width: "100%" } : {}}
    >
      {weekDaysToShow.map((weekDay: number, index: number) => {
        return (
          <NameDay key={index}>
            <small>{weekDaysNames[weekDay].slice(0, nameSize)}</small>
          </NameDay>
        );
      })}
    </Header>
  );
};

export default HeaderDays;
