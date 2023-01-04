import { IDay } from "../DayComponent/types";
import { Container, DayContainer, EventContainer } from "./styles";

const ListDayComponent = ({day, events}:IDay) => {
  return (
    <Container>
      <DayContainer>
        {day.format("DD")}
      </DayContainer>
      <EventContainer>
        
      </EventContainer>
    </Container>
  )
}

export default ListDayComponent