import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { IDay } from "../DayComponent/types";
import { Container, DayContainer, DayInfo, Description, EventContainer, EventInfo, Time } from "./styles";

const ListDayComponent = ({ day, events }: IDay) => {
  const { isMobile, isLista } = useContext(GlobalContext)
  const Days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  
    return (
    (isMobile || isLista) ?
    <Container>
      <DayContainer>
          <DayInfo>
            {Days[day.day()]}
          </DayInfo>
          <DayInfo>
            {day.format("DD")}
          </DayInfo>
      </DayContainer>
      <EventContainer>
          {
            events?.map((event, key) => day.format("YYYY-MM-DD") == event.start.format("YYYY-MM-DD") && <EventInfo key={key} type={event.type}>
              <Time>
                {event.start.format("HH:mm")} - {event.end.format("HH:mm")}
              </Time>
              <Description>
                {event.description}
              </Description>
            </EventInfo>)
        }
      </EventContainer>
    </Container>
      :
      <></>
  )
}

export default ListDayComponent