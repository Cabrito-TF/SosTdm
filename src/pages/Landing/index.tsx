import React from "react";
import landingImg from "../../../assets/physcologists.png";
import LogoW from "../../../assets/LogoW.png"
import * as Styled from "./styles";
import { Text,View } from "react-native";
import { useNavigation } from "@react-navigation/core";



const Landing: React.FC = () =>{
    const {navigate} = useNavigation();

    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
            <Styled.LogoContainer>
                <Styled.LogoLanding source={LogoW}/>
            </Styled.LogoContainer>
            <Styled.ImgContainer>
                <Styled.ImageLanding source={landingImg} />
            </Styled.ImgContainer>
            
            <Styled.Input 
            className="email"
            placeholder="E-mail"
            keyboardType="email-address"
            />
            
            <Styled.Input 
            className="password"
            placeholder="Senha"
            secureTextEntry={true}
            />
            
            <Styled.ButtonsContainer>
                <Styled.Button onPress={()=>console.log("login")} activeOpacity={1}>
                    <Text>Login</Text>
                </Styled.Button>   
            </Styled.ButtonsContainer>

            <Styled.SignUp>
                <Styled.SignUpBtn onPress={()=>navigate("SignUp")} activeOpacity={1}>
                    <Text>Cadastre-se</Text>
                </Styled.SignUpBtn>
            </Styled.SignUp>
            
        </Styled.Gradient>
    )
}

export default Landing;
