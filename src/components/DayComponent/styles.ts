import styled from "styled-components";

const DayContainer = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid transparent;
  margin: 0;
`;

const HeaderDay = styled.header`
  display: flex;  
  justify-content: center;
`;

const DayToday = styled.div`
  display: flex;  
  justify-content: center;
  align-content: center;
  width: 20px;
  height: 18px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: #E5EFF8;
  font-weight: bold;
  padding: 3px;
`;


export { DayContainer, HeaderDay, DayToday }