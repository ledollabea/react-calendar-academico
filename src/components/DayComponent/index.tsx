import { DailyQalendarEvent, IDay, QalendarEvent } from "./types";
import {
  DayContainer,
  DayContent,
  DayHourBlock,
  DayHourDivision,
  DaysRow,
  DayToday,
  EventCard, DivTest
} from "./styles";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import EventModalComponent from "../EventModalComponent";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const DayComponent = ({ day, events = [], smallView }: IDay) => {
  const { setDaySelected, setShowEventModal, isMobile } =
    useContext(GlobalContext);

  const isBetween = (
    value: dayjs.Dayjs,
    min: dayjs.Dayjs,
    max: dayjs.Dayjs
  ) => {
    return value.isSameOrAfter(min) && value.isSameOrBefore(max);
  };
  console.log(smallView)
  const dateIsBetween = (
    min1: dayjs.Dayjs,
    max1: dayjs.Dayjs,
    min2: dayjs.Dayjs,
    max2: dayjs.Dayjs
  ) => {
    return (
      isBetween(min1, min2, max2) ||
      isBetween(max1, min2, max2) ||
      isBetween(min2, min1, max1) ||
      isBetween(max2, min1, max1)
    );
  };

  let eventsList = events
    .filter((event) => event.date.startOf("day").isSame(day.startOf("day")))
    .map((event: QalendarEvent) => {
      let conflicts = events
        .map((event2, i) => {
          if (dateIsBetween(event.start, event.end, event2.start, event2.end)) {
            return i;
          } else {
            return -1;
          }
        })
        .filter((_) => _ != -1);

      let duration = event.end.diff(event.start, "minute");
      const qalendarEvent: DailyQalendarEvent = {
        ...event,
        duration: duration,
        conflicts: conflicts,
      };

      return qalendarEvent;
    });

  const hourList = [];
  for (let i = 0; i < 24; i++) {
    hourList.push({
      eventList: eventsList.filter((event) => event.start.hour() == i),
    });
  }

  const handleClick = () => {
    setDaySelected(day);
    setShowEventModal(true);
    // console.log(daySelected);
  };

  const calculateLeft = (
    qevent: DailyQalendarEvent,
    qEventsList: DailyQalendarEvent[],
    hourEventList: DailyQalendarEvent[]
  ) => {
    let eventIndex = qEventsList
      .filter((_, i) => qevent.conflicts.includes(i))
      .filter(
        (_) => !hourEventList.filter((x) => x.id != qevent.id).includes(_)
      )
      .findIndex((_) => _.id == qevent.id);

    let multiplier = 100 / qevent.conflicts.length;

    return eventIndex != -1 ? multiplier / eventIndex : 0;
  };

  return (
    <DayContainer onClick={() => handleClick()}>
      <DaysRow>
        {day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? (
          <DayToday>
            <small>{day.format("DD")}</small>
          </DayToday>
        ) : (
          <div>
            <small>{day.format("DD")}</small>
          </div>
        )}
      </DaysRow>
      <DayContent>
        {
          smallView ?
            (hourList.map((hour, i) => {
              return (
                <DayHourDivision key={i}>
                  <DivTest>
                  {hour.eventList.map((event, j) => (
                    <>
                      <EventCard key={j} screenType={isMobile}> <small>{event.description[0]}</small></EventCard>
                    </>
                  ))}
                </DivTest>
                 </DayHourDivision>
              );
            })
              )
            :
            
            (hourList.map((hour, i) => {
              return (
                <DayHourDivision key={i}>
                  {hour.eventList.map((event, j) => {
                    return (
                      <EventCard
                        key={j}
                        style={{
                          top: `${event.start.minute()}px`,
                          height: `${event.duration}px`,
                          width: `${100 / event.conflicts.length}%`,
                          left: `${calculateLeft(
                            event,
                            eventsList,
                            hour.eventList
                          )}%`,
                        }} screenType = {isMobile}
                      >
  
                        <div>
                          <small>{event.description}:</small>
                        </div>
                        <div>
                          <small>
                            De {event.start.format("HH:mm")} às{" "}
                            {event.end.format("HH:mm")}
                          </small>
                        </div>
                      </EventCard>
                    );
                  })}
                </DayHourDivision>
              );
            })
              ) 
        
        
        
        }
      </DayContent>
    </DayContainer>
  );
};

export default DayComponent;
