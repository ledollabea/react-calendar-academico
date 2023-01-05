import styled from "styled-components";

interface IProps {
  type: string
}

interface IIsToday{
  isToday: boolean
}

const Container = styled.div`
  width: 90vw;
  display: flex;
  text-align: left;
  border-bottom: 1px solid #0000001c;
`;
const DayContainer = styled.div`
  width: 50px;
`;

const EventContainer = styled.div`
  width: 100%;
`;
const EventInfo = styled.div<IProps>`
  ${(props) => props.type == "aula" ? `background: #ffcc66` : props.type == "feriado" ? `background: #AEBCCD` : `background: #9999cc`};
  width: 100%;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #0000001c;
  display: flex;
`;


const DayInfo = styled.p`
  padding: 5px;
  margin: 0;
`;


const Time = styled.div`
  width: 30%;
  padding: 0 10px;
`;

const Description = styled.div``;

export {Container, DayContainer, EventContainer, DayInfo, EventInfo, Time, Description}