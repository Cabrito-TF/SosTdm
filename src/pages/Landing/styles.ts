import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

export const Gradient = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  padding: 8%;
  justify-content: center;
  align-items:center;
  position:relative;
`;


export const ImgContainer = styled.View`
  position:relative;
  width:17.8rem;
  height:8rem;
  top:-5rem;
`;
export const LogoContainer = styled.View`
  position:relative;
  width:11.8rem;
  height:5rem;
  top:-8rem;
`;
export const ImageLanding = styled.Image`
  position:absolute;
  width: 100% ;
  height: 100% ;
`;
export const LogoLanding = styled.Image`
  position:absolute;
  width: 110% ;
  height: 100% ;
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