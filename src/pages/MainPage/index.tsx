import React,{useState, useEffect} from "react";
import landingImg from "../../../assets/physcologists.png";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";
import api from "../../services/api"
import * as SecureStore from "expo-secure-store";
import { Icon, ListItem} from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        data.map(async (l, i) => {
          let index = i;
          const response = await api.get("list");
          console.log(response.data)
          let newUser: User = {
            id:response.data[i].id,
            name:response.data[i].name,
            email:response.data[i].email,
            password:response.data[i].password,
            pnumber:response.data[i].pnumber,
            birthdate:response.data[i].birthdate,
            psy:response.data[i].psy,
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
        console.log(users)


        for( var i = 0; i < users.length; i++){ 
                                   
          if ( users[i].psy === "0") { 
              users.splice(i, 1); 
              i--; 
          }
      }
    return(
        <Styled.Gradient
        colors={["#2F465B","#223342"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
          {!loading ?
          users.map((l, i)=>(
            
            <ListItem
            containerStyle={{
              flexDirection: "row",
              backgroundColor: "#151F28",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              width:400,
              alignContent:"center",
            }}
            key={i}
            bottomDivider>
              <a href={`https://wa.me/55${l.pnumber}`} style={{textDecoration:"none",alignItems: "center",}}>
              <ListItem.Content>
              <ListItem.Title
              style={{
                color: "#efefef",
                fontSize: 25,
                alignSelf: "center",
              }}
            >
              Dr. {l.name}
            </ListItem.Title>
            <ListItem.Subtitle
            style={{
              color: "#efefef",
              fontSize: 15,
              alignSelf: "center",
            }}>
              {l.pnumber}
            </ListItem.Subtitle>
              </ListItem.Content>
              </a>
            </ListItem>
          )) : <Text>Carregando Aguarde...</Text>}
          
            <Styled.IconContainer>
              <Icon name="chevron-left" type="font-awesome" color="#f6f6f6" onPress={()=>navigate("Landing")}/>
            </Styled.IconContainer>
        </Styled.Gradient>
    )
}

export default MainPage;