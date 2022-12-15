import styled from "styled-components";

const DayContainer = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  margin: 0;
`;

const HeaderDay = styled.header`
  display: flex;  
  justify-content: flex-start;
`;

const DayToday = styled.div`
  display: flex;  
  justify-content: flex-start;
  border: 1px solid green;
  border-radius: 50%;
  background: green;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 3px;
`;


export { DayContainer, HeaderDay, DayToday }