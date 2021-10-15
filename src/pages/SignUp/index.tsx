import React,{useState, useEffect} from "react";
import * as Styled from "./styles";
import { View,Button, Alert, Text, StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";
import LogoW from "../../../assets/LogoW.png";
import Toast from 'react-native-toast-message';
import DateTimePicker from "@react-native-community/datetimepicker";
import api from "../../services/api";
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

interface User {
    name?: string;
    email?: string;
    password?: string;
    mPassword?:string;
    whatsapp?: string;
    birthdate?: string;
    psy?: string;
    logged: boolean;
}

const SignUp: React.FC = () =>{
    const [date, setDate] = useState(new Date(""));
    const [show, setShow] = useState(false);
    
    const {navigate} = useNavigation();

    let us:User = {
        name: "",
        email: "",
        password:"",
        mPassword:"",
        whatsapp: "",
        birthdate:"",
        psy:"0",
        logged:false,
    }
    const [user, onChangeUser] = React.useState(us);

    function addSlashes(){
      if(user.birthdate.length == 8){
      let d1 = user.birthdate.slice(0,2)
      let d2 = user.birthdate.slice(2,4)
      let d3 = user.birthdate.slice(4)

      const date = [d1,d2,d3]
      return onChangeUser({
        ...user,
        birthdate: date.join("/"),
      })
      }else{
        return console.error("a data de aniversário não é valida")
      }
    }

    function verification(){
      if(user.password === user.mPassword){
        return true
      }
    return false
    };

    async function handleSignUp(){
      if(verification()){
      try{
        const response = api.post("Register",{
          name: user.name,
          email: user.email,
          password: user.password,
          pnumber: user.whatsapp,
          username: user.email,
          birthdate: user.birthdate,
          psy: user.psy,
          logged: user.logged
        });
         navigate("Landing")
      }
      catch(err){
        console.log(err)
      }}
    }
    

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
            placeholderTextColor="#9f9f9f"
            placeholder="Nome Completo"
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  name: text,
                })}
              }
              value={user.name}
            />

            <Styled.Input 
            className="email"
            placeholderTextColor="#9f9f9f"
            placeholder="E-mail"
            autocapitalize="none"
            keyboardType="email-address"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  email: text,
                })}}
            
              value={user.email}
            />


            <Styled.Input 
            className="senha"
            placeholderTextColor="#9f9f9f"
            placeholder="Senha"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  password: text,
                })}}
            secureTextEntry={true}
              value={user.password}
            />

            <Styled.Input 
            className="password-match"
            placeholderTextColor="#9f9f9f"
            placeholder="Confirme Sua Senha"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(text) =>{onChangeUser({
              ...user,
              mPassword:text,
            })}}
            secureTextEntry={true}
              value={user.mPassword}
            />

            <Styled.Input 
            className="whatsapp"
            placeholderTextColor="#9f9f9f"
            placeholder="Número de Whatsapp"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  whatsapp: text,
                })}
              }
              value={user.whatsapp}
            />

            <Styled.Input 
            className="birthday"
            placeholderTextColor="#9f9f9f"
            placeholder="Data de Nascimento"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) =>
                {onChangeUser({
                  ...user,
                  birthdate: text,
                })}
              }
              onBlur={()=> addSlashes()}
            value={user.birthdate}
            />

           <View>
             <Picker 
             style={styles.picker}
             selectedValue={user.psy}
             onValueChange={(itemValue) => 
              {onChangeUser({
                ...user,
                psy: itemValue,
              })
             }}
             >
               
              <Picker.Item label="paciente" value="0"/>
              <Picker.Item label="psicologo" value="1"/>

             </Picker>
           </View>

            </Styled.Form>

            

            <Styled.ButtonsContainer>
                <Styled.Button onPress={()=> handleSignUp()} activeOpacity={1}>
                    <Text>Cadastrar-se</Text>
                </Styled.Button>
            </Styled.ButtonsContainer>
            <Styled.IconContainer>
              <Icon name="chevron-left" type="font-awesome" color="#f6f6f6" onPress={()=>navigate("Landing")}/>
            </Styled.IconContainer>
            </Styled.Gradient>
            
    )
}

const styles = StyleSheet.create({
picker:{
  borderRadius: 8,
  height: 50,
  backgroundColor:"#66074e",
  color:"#9f9f9f"
}});
export default SignUp;