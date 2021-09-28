import React from "react";
import landingImg from "../../../assets/physcologists.svg";
import LogoW from "../../../assets/LogoW.svg"
import * as Styled from "./styles";
import { Text,View } from "react-native";
import { useNavigation } from "@react-navigation/core";



const FakeLanding: React.FC = () =>{
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
            
            <Styled.ButtonsContainer>
                <Styled.Button onPress={()=>navigate("Landing")} activeOpacity={1}>
                    <>Login</>
                </Styled.Button>   
            </Styled.ButtonsContainer>

            <Styled.SignUp>
                <Styled.SignUpBtn onPress={()=>navigate("SignUp")} activeOpacity={1}>
                    <>Cadastre-se</>
                </Styled.SignUpBtn>
            </Styled.SignUp>
            
        </Styled.Gradient>
    )
}

export default FakeLanding;