import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import {  SafeAreaView, FlatList } from 'react-native';
import {Div, ThemeProvider, Button, Input, Icon, Image, Textarea,} from 'react-native-magnus';
import Constants from 'expo-constants';
import MainButton from '../MainButton';

const TextInp = styled.TextInput`
    height: 50px;
    width: 100%;
    background-color: white;
    border: solid 1px #92A8F8;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
`

export default function UserInput ({
    onCreate=()=>{}
})
{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
    <ThemeProvider>
            <TextInp type='text' placeholder='Name' />
            <TextInp type='text' placeholder='Email' onChangeText={(val)=>setEmail(val)}/>
            <TextInp type='text' secureTextEntry placeholder='Password' onChangeText={(val)=>setPassword(val)}/>
            <TextInp type='number' placeholder='Phone Number'/>
            <MainButton iconName='person-circle-outline' bg='#92A8F8' textColor='white' buttonText='Create Account' onPress={()=>onCreate(email, password)}/>
    </ThemeProvider>
        
    );
 }
