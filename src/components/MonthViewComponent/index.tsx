import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import SmallDayComponent from "../SmallDayComponent";
import { MonthContainer, RowContainer } from "./styles";
import { IMonth } from "./types";
import ListWeekComponent from "../ListWeekComponent";

const MonthViewComponent = ({ month, events = [] }: IMonth) => {
  const { isMobile, isLista } = useContext(GlobalContext)
  const eventList = events.filter(({ date }) => {
    return !!month.find(
      (i) =>
        !!i.find((j) => j.month() == date!.month() && j.year() == date!.year())
    );
  });

  return (
    (!isLista) ?
    <MonthContainer>
      <>
        {month.map((row, i) => (
          <RowContainer key={i}>
            {row.map((day, ind) => (
              <SmallDayComponent
                key={ind}
                day={day}
                smallView={isMobile}
                events={eventList}
              />
            ))}
          </RowContainer>
        ))}
      </>
      </MonthContainer>
      :
      <MonthContainer>
      <>
        {month.map((row, i) => (
          <ListWeekComponent key={i} week={row} events={eventList}/>
        ))}
      </>
      </MonthContainer>
  );
};

export default MonthViewComponent;
