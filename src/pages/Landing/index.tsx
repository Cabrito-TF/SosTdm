import React from "react";
import { useNavigation } from "@react-navigation/native";
import landingImg from "../../../assets/physcologists.svg"
import * as Styled from "./styles";
import { Text } from "react-native";

const Landing: React.FC = () =>{

    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
            <Styled.ImageLanding source={landingImg} />

        </Styled.Gradient>
    )
}

export default Landing;