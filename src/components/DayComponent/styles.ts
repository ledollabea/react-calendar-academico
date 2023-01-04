import styled from "styled-components";
import { HOUR_WIDTH } from "../HourColumnComponent/styles";

interface IProps {
  screenType?: boolean
}

const DayContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  margin: 0;
  display: flex;
  flex-direction: column;
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

const EventCard = styled.div<IProps>`
  ${(props) => props.screenType ? 
  `position: relative;
  background-color: #0073db;
  font-size: 12px;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  align-content: center;
  cursor: pointer;
  padding: 0.1px;
  margin: 5px 2px;`
  :
  `position: relative;
  overflow-y: auto;
  text-overflow: ellipsis;
  background-color: #0073db;
  color: white;
  border-radius: 3px;
  cursor: pointer;`
};
`

const DivTest = styled.div`
  display: flex;
  flex-wrap: wrap;  
`; 

export { DayContainer, HeaderDay, DayToday, DayContent, DayHourBlock, DayHourDivision, EventCard, DaysRow, DivTest }