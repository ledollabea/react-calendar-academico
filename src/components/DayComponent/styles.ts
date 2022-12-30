import styled from "styled-components";
import { HOUR_WIDTH } from "../HourColumnComponent/styles";

const DayContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

const HeaderDay = styled.header`
  display: flex;  
  justify-content: center;
`;

const DayToday = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 18px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: #E5EFF8;
  font-weight: bold;
  padding: 3px;
`;

const DaysRow = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
`;

const DayContent = styled.div`
  background-color: #E5EFF8;
  width: 100%;
`

const DayHourBlock = styled.div`
  width: ${HOUR_WIDTH}px;
  height: 60px;
  border-top: #0000001c 1px solid;
`

const DayHourDivision = styled.div`
  height: 60px;
  border-top: #0000001c 1px solid;
  display: flex;
  width: 100%;
`

const EventCard = styled.div`
  position: relative;
  overflow-y: auto;
  text-overflow: ellipsis;
  background-color: #0073db;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`

export { DayContainer, HeaderDay, DayToday, DayContent, DayHourBlock, DayHourDivision, EventCard, DaysRow }