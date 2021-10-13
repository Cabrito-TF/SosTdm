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

export const LogoLanding = styled.Image`
  position:absolute;
  width: 110% ;
  height: 100% ;
`;

export const LogoContainer = styled.View`
  position:relative;
  width:192px;
  height:81px;
  top:-25px;
`;


export const Input = styled.TextInput`
  color: #f6f6f6;
  font-size: 20px;
  border-radius: 3px;
  border:#fff;
  border-width:2px;
  height: 50px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.View`
  justify-content: center;
  box-shadow:0 2px 0 #9f9f9f;
  border-radius: 8px;
  margin-bottom:10px;
`;

export const Button = styled.TouchableOpacity`
  height: 25px;
  width: 200px;
  border-radius: 8px;
  padding: 24px;
  font-family:sans-serif;
  font-weight:600;
  font-size:19px;
  color:#223342;
  align-items:center;
  justify-content: center;
  background-color: #e1e1e1;
`;

export const Form = styled.View`
  margin-bottom:30px;

`;