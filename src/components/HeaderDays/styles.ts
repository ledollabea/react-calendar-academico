import styled from "styled-components";
import { HOUR_WIDTH } from "../HourColumnComponent/styles";

const Header = styled.header`
  padding-left: ${HOUR_WIDTH}px;
  width: calc(100% - ${HOUR_WIDTH}px);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NameDay = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
`;

export {Header, NameDay}