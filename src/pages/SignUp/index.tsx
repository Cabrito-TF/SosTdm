import React,{useState, useEffect} from "react";
import * as Styled from "./styles";
import { View,Button, Alert} from "react-native";
import {Picker} from "@react-native-picker/picker";
import LogoW from "../../../assets/LogoW.svg";
import Toast from 'react-native-toast-message';
import DateTimePicker from "@react-native-community/datetimepicker";

interface User {
    name?: string;
    email?: string;
    password?: string;
    whatsapp?: string;
    birthdate?: string;
    psy?: boolean;
}

const SignUp: React.FC = () =>{
    const [date, setDate] = useState(new Date(""));
    const [show, setShow] = useState(false);
    
    let us:User = {
        name: "",
        email: "",
        password:"",
        whatsapp: "",
        birthdate:"",
        psy:false,
    }
    const [user, onChangeUser] = React.useState(us);

    function verification(){
      let regExp = /[a-zA-Z]/g;
        if(regExp.test(user.birthdate) || user.birthdate.length > 11){
            return Alert.alert(
              "Alert Title",
              "My Alert Msg",
              [
                {
                  text: "Cancel",
                  onPress: () => Alert.alert("Cancel Pressed"),
                  style: "cancel",
                },
              ],
              {
                cancelable: true,
                onDismiss: () =>
                  Alert.alert(
                    "This alert was dismissed by tapping outside of the alert dialog."
                  ),
              }
            );
        }else{
            return console.log("sim")
        }
    };

    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
            
            <Styled.LogoContainer>
                <Styled.LogoLanding source={LogoW}/>
            </Styled.LogoContainer>
            
            <Styled.Form>

            <Styled.Input 
            className="Name"
            placeholder="Nome Completo"
            keyboardType="default"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  name: text,
                }); console.log(user.name)}
              }
              value={user.name}
            />
            <Styled.Input 
            className="email"
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  email: text,
                }); console.log(user.email)}
              }
              value={user.email}
            />
            <Styled.Input 
            className="whatsapp"
            placeholder="Número de Whatsapp"
            keyboardType="numeric"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  whatsapp: text,
                }); console.log(user.whatsapp)}
              }
              value={user.whatsapp}
            />
            <Styled.Input 
            className="birthday"
            placeholder="Data de Nascimento"
            keyboardType="numeric"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  birthdate: text,
                }); console.log(user.birthdate)}
              }
            value={user.birthdate}
            />

            {/* <Picker 
            selectedValue={user.psy}
            onValueChange={(itemValue, itemIndex) =>{onChangeUser({
                ...user,
                psy:itemValue
              }); console.log(user.psy)}
            }>
              <Picker.Item label="Psicologo" value={true}/>
              <Picker.Item label="Paciente" value={false}/>
            </Picker> */}

            </Styled.Form>

            

            <Styled.ButtonsContainer>
                <Styled.Button onPress={()=> verification()} activeOpacity={1}>
                    <>Cadastrar-se</>
                </Styled.Button>
            </Styled.ButtonsContainer>
            </Styled.Gradient>
            
    )
}

export default SignUp;