import React from "react";
import landingImg from "../../../assets/physcologists.png";
import LogoW from "../../../assets/LogoW.png"
import * as Styled from "./styles";
import { Text,View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import * as SecureStore from "expo-secure-store";
import api from "../../services/api"


const Landing: React.FC = () =>{
    const {navigate} = useNavigation();
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

        async function handleLogin() {
            try {
              const response = await api.post("authenticate", { username, password });
              await console.log(response.data.jwt);
              await SecureStore.setItemAsync("token", JSON.stringify(response.data.jwt));
        
              const result = await SecureStore.getItemAsync("token");
              api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
              if (result) {
                navigate("Main");
              }
            }catch(err){
                console.error(err)
            }}

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
            onChangeText={(text) => onChangeUsername(text)}
            value={username}
            />
            
            <Styled.Input 
            className="password"
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => onChangePassword(text)}
            value={password}
            />
            
            <Styled.ButtonsContainer>
                <Styled.Button onPress={()=>handleLogin()} activeOpacity={1}>
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
