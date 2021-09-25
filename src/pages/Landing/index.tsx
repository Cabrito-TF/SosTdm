import React from "react";
import landingImg from "../../../assets/physcologists.svg";
import LogoW from "../../../assets/LogoW.svg"
import * as Styled from "./styles";

const Landing: React.FC = () =>{

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
            keyboardType="email-address"/>
            <Styled.Input 
            className="password"
            placeholder="Senha"
            secureTextEntry={true}/>
        </Styled.Gradient>
    )
}

export default Landing;