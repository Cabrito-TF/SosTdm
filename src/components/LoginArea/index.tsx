import React from "react";
import * as Styled from "./styles"


interface LoginProps{
    hideBtn:boolean;
}


const LoginArea:React.FC<LoginProps> = ()=>{
    let ShowBtn = true;
    return(
        <>
        {
        function ShowLogin(){
            if(ShowBtn){
                ShowBtn = false;
                console.log(ShowBtn)
                return(
                <Styled.ButtonsContainer>
                    <Styled.Button onPress={()=>ShowLogin() } activeOpacity={1}>
                        <>Login</>
                    </Styled.Button>   
                </Styled.ButtonsContainer>
                )
            }else{
                ShowBtn = true;
                console.log(ShowBtn)
                return(
                <Styled.ButtonsContainer>
                    <Styled.Button onPress={()=>console.log("Teste")} activeOpacity={1}>
                        <>Login</>
                    </Styled.Button>   
                </Styled.ButtonsContainer>)
            }
            }
        }
        </>
    )
}

export default LoginArea;