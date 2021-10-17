import React,{useState, useEffect} from "react";
import landingImg from "../../../assets/physcologists.png";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";
import api from "../../services/api"
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-community/async-storage";

interface User{
    id:string,
    name:string,
    email:string,
    password:string,
    pnumber:string,
    birthdate:string,
    psy:string,
}

const MainPage: React.FC = () =>{
    const {navigate} = useNavigation();
    let us: User[];
    us = [];

    const [users, setUsers] = useState(us)
    const [loading, setLoading] = useState(true);

    async function loadAllUsers() {
        let arr: [];
        arr = [];
        setUsers(arr)
        const { data } = await api.get("list");
        data.map(async () => {
          const response = await api.get("list");
          let newUser: User = {
            id:response.data.id,
            name:response.data.name,
            email:response.data.email,
            password:response.data.password,
            pnumber:response.data.pnumber,
            birthdate:response.data.birthdate,
            psy:response.data.psy,
          };
          setUsers((valor) => [...valor, newUser]);
        });
      }
      useEffect(() => {
        async function bringAllGroups() {
          let token = await AsyncStorage.getItem("token");
          if (token) {
            token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end. This is a temp fix?!
            api.defaults.headers.Authorization = `Bearer ${token}`;
          }
    
          loadAllUsers();
          setLoading(false);
        }
        bringAllGroups();
      }, []);

    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
            
        </Styled.Gradient>
    )
}

export default MainPage;