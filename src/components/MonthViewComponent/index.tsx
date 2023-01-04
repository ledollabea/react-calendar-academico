import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import SmallDayComponent from "../SmallDayComponent";
import { MonthContainer, RowContainer } from "./styles";
import { IMonth } from "./types";

const MonthViewComponent = ({ month, events = [] }: IMonth) => {
  const { isMobile } = useContext(GlobalContext)
  const eventList = events.filter(({ date }) => {
    return !!month.find(
      (i) =>
        !!i.find((j) => j.month() == date!.month() && j.year() == date!.year())
    );
  });

  return (
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
  );
};

export default MonthViewComponent;
