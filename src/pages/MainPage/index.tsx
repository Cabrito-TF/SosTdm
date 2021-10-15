import React from "react";
import landingImg from "../../../assets/physcologists.png";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";
import api from "../../services/api"


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
    let user
    async function loadAllsuers() {
        let arr: [];
        arr = [];
        
        const { data } = await api.get("list");
        data.map(async () => {
          const response = await api.get(`classes/${gp.class_id}`);
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
    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
            
        </Styled.Gradient>
    )
}

export default MainPage;