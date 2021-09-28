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

export const Input = styled.TextInput`
  color: #f6f6f6;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid #fff;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.View`
  justify-content: center;
  box-shadow:0 0.2rem 0 #9f9f9f;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin-bottom:10px;
`;

export const Button = styled.TouchableOpacity`
  height: 2rem;
  width: 10rem;
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