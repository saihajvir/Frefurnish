import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MainButton from "../MainButton";

const TextInp = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
`

export default function SignIn({
    onSignIn=()=>{},
    onPress
})
{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <>
        <TextInp type='text' placeholder='Email' onChangeText={(val)=>setEmail(val)}/>

        <TextInp secureTextEntry placeholder='Password' onChangeText={(val)=>setPassword(val)}/>

        <MainButton bg='white' textColor='periwinkle' buttonText='Sign In' onPress={()=>onSignIn(email, password)}/>
    </>
    
}