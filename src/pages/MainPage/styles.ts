import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

export const Gradient = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  padding: 10%;
  justify-content: center;
  align-items:center;
  position:relative;
`;
export const IconContainer = styled.View`
position:absolute;
left:50px;
top:30px;
`;