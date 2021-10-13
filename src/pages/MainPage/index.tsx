import React from "react";
import landingImg from "../../../assets/physcologists.png";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";



const MainPage: React.FC = () =>{
    const {navigate} = useNavigation();
    
    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
            <Text>OLÁ</Text>
        </Styled.Gradient>
    )
}

export default MainPage;