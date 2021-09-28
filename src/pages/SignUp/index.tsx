import React,{useState} from "react";
import * as Styled from "./styles";
import { View,Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUp: React.FC = () =>{
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    


    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
            
            <Styled.Input 
            className="Name"
            placeholder="Nome Completo"
            keyboardType="default"
            />
            <Styled.Input 
            className="email"
            placeholder="E-mail"
            keyboardType="email-address"
            />
            <Styled.Input 
            className="whatsapp"
            placeholder="Número de Whatsapp"
            keyboardType="phone-pad"
            />
            <Styled.ButtonsContainer>
            <Styled.Button onPress={() => {show == true ? setShow(false) : setShow(true)}}/>
            </Styled.ButtonsContainer>
            <DateTimePicker
            value={new Date()}/>
        </Styled.Gradient>
    )
}

export default SignUp;