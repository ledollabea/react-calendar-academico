import { DailyQalendarEvent, IDay, QalendarEvent } from "./types";
import { Day, DayContainer, DayToday, EventCard, MonthDaysRow, EventBall, EventList } from "./styles";
import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const SmallDayComponent = ({ day, events = [], smallView }: IDay) => {
  const { setDaySelected, setShowEventModal, setEventSelected, setShowEditEventModal } =
    useContext(GlobalContext);

  let eventsList = events
    .filter((event) => event.date!.startOf("day").isSame(day.startOf("day")))
    .map((event: QalendarEvent) => {
      let duration = event.end.diff(event.start, "minute");
      const qalendarEvent: DailyQalendarEvent = {
        ...event,
        duration: duration,
        conflicts: [],
      };

      return qalendarEvent;
    });
 
  const handleEventSelect = (event: QalendarEvent) => {
    setShowEditEventModal(true)
    setEventSelected(event)
  }
  

  return (
    <DayContainer >
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
        <EventList>
        {eventsList.map((event, i) => {
          
          return (
            smallView ?
              <EventBall key={i} onClick={() => handleEventSelect(event)}/>
              :
              <EventCard key={i}  onClick={() => handleEventSelect(event)}>
                <small>{event.description}</small>
              </EventCard>
            );
          })}
          </EventList>
      </MonthDaysRow>
    </DayContainer>
  );
};

export default SmallDayComponent;
