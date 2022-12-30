import { DailyQalendarEvent, IDay, QalendarEvent } from "./types";
import { Day, DayContainer, DayToday, EventCard, MonthDaysRow } from "./styles";
import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const SmallDayComponent = ({ day, events = [] }: IDay) => {
  const { setDaySelected, setShowEventModal, daySelected } =
    useContext(GlobalContext);

  let eventsList = events
    .filter((event) => event.date.startOf("day").isSame(day.startOf("day")))
    .map((event: QalendarEvent) => {
      let duration = event.end.diff(event.start, "minute");
      const qalendarEvent: DailyQalendarEvent = {
        ...event,
        duration: duration,
        conflicts: [],
      };

      return qalendarEvent;
    });

  const handleClick = () => {
    setDaySelected(day);
    setShowEventModal(true);
    console.log(daySelected);
  };

  return (
    <DayContainer onClick={() => handleClick()}>
      <MonthDaysRow>
        {day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? (
          <DayToday>
            <small>{day.format("DD")}</small>
          </DayToday>
        ) : (
          <Day>
            <small>{day.format("DD")}</small>
          </Day>
        )}
        {eventsList.map((event, i) => {
          return (
            <div key={i} style={{ width: "95%" }}>
              <EventCard style={{ marginBottom: "3px" }}>
                <small>{event.description}</small>
              </EventCard>
            </div>
          );
        })}
      </MonthDaysRow>
    </DayContainer>
  );
};

export default SmallDayComponent;
