import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, ImageBackground, StyleSheet} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import UserCard from "../comps/UserCard";

import ChairIcon from '../assets/Frefurnish-plain.png';
import Logo from '../assets/Frefurnish-logo.png';
import UserInput from "../comps/userinput";
import UploadImage from "../comps/UploadImage";
import Background from '../assets/background.png';

import ReqItem from "../comps/ReqItem";
import { StatusBar } from "expo-status-bar";
import Gradient from '../assets/frefurnish-gradient.png';
import DonorGradient from '../assets/gradient-donor.png';
import SignIn from "../comps/SignIn";

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    justify-content: center;
    align-items: center;
    
`
const WrapperImage = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
`
const TopContainer = styled.View`
    flex: ${props=>props.flex};
    width: 100%;
    justify-content: flex-end;
    align-items: ${props=>props.alignItems};
`

const Container = styled.View`
    flex: ${props=>props.flex};
    width: 100%;
    align-items: center;
    justify-content: center;
`

const BottomContainer = styled.View`
    flex: ${props=>props.flex};
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10%;
`

const Heading = styled.Text`
    font-size: 36px;
    font-weight: 700;
    color: ${props=>props.textcol};
`


export default function Landing({
    navigation,
    bg='#92A8F8',
    textcol='#FFF',
    flex='1',
    alignItems='flex-start'
})
{
    const [state, nextState] = useState(0);
    
    const [user, setUser] = useState('');
    
    function HandleTypePress()
    {
        if(user === 'worker')
        {
            {nextState (state + 1)}
        }
        else if(user === 'donor')
        {
            {nextState (state + 1)}
        } else{
            nextState(state)
        }
    }
    
    //FIREBASE CREATE ACCOUNT AND SIGN IN
    const FBCreateUser = async(email, password)=>{
        const auth = getAuth();
        const result = await createUserWithEmailAndPassword(auth, email, password)
        alert('Created!')
      }
      const FBSignIn = async(email, password)=>{
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth, email, password)
        alert('Signed In!')
      }

    if(state === 0)
    {
    return (
        <ThemeProvider theme={ffTheme}>
            <StatusBar/>
            <Wrapper bg='#92A8F8' >
            <TopContainer flex='1' alignItems='center'>
                <Heading textcol='#FFF'>
                    Welcome to Frefurnish
                </Heading>
            </TopContainer>
            <Container flex='2'>
                <Image source={Logo} w={223} h={234}/>
            </Container>
            <BottomContainer flex='0.5'>
                <MainButton buttonText={'Get Started'} bg="white" textColor='periwinkle' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider>
    )}

    if(state === 1)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <StatusBar/>
            <ImageBackground source={Background} style={styles.container}>
            <Wrapper bg="#FFF">
            <TopContainer flex='1' alignItems='flex-start'>
                <Heading textcol='white'>
                    What's your purpose?
                </Heading>
            </TopContainer>
            <Container flex='3'>
                <UserCard 
                    GradImg={Gradient}
                    descriptionText='Social workers are individuals who are looking to find listings that will help improve or sustain the quality of life at the social home they work at. Social workers are the only type of user eligible to receive donations.'
                    userType='Social Worker'
                    setUser={setUser}
                />
                <UserCard
                    GradImg={DonorGradient}
                    descriptionText='Donors are individuals and vendors that are looking to donate their personal items or lightly used returned items and excess inventory.'
                    userType='Donor'
                    setUser={setUser}
                />
            </Container>
            <BottomContainer flex='1'>
                <MainButton buttonText={'Next'} bg="white" textColor='#EAAB97' onPress={HandleTypePress}/>
            </BottomContainer>
            </Wrapper>
            </ImageBackground>
        </ThemeProvider>
        )
    }
    if(state === 2)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <StatusBar/>
            <Wrapper bg="#FFF">
            <TopContainer flex='0.7' alignItems='flex-start'>
                <Heading textcol='#92A8F8'>
                    Create your account
                </Heading>
            </TopContainer>
            <Container flex='2'>
                <UploadImage uploadText='Profile Image'/>
                <UserInput onCreate={FBCreateUser}/>
            </Container>
            <BottomContainer flex='1'> 
                <MainButton buttonText={'Next'} bg="periwinkle" textColor='white' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider>
        )
    }
    if(state === 3)
    {
        return (
            <ThemeProvider theme={ffTheme}>
                <StatusBar />
                <Wrapper bg='#92A8F8'>
                    <TopContainer flex='0.7' alignItems='flex-start'>
                        <Heading textcol='#FFF'>
                            Sign In
                        </Heading>
                    </TopContainer>
                    <Container flex='2'>
                        <Image source={Logo} w={223} h={234} mt={50} mb={40}/>
                        <SignIn onSignIn={FBSignIn}/>
                    </Container>
                    <BottomContainer flex='1'>
                        <MainButton buttonText={'Next'} bg="white" textColor='periwinkle' onPress={() => {nextState (state + 1)}}/>
                    </BottomContainer>
                </Wrapper>
            </ThemeProvider>
        )
    }

    if(state === 4)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <StatusBar/>
            <Wrapper bg='#92A8F8'>
            <TopContainer flex='1' alignItems='center'>
                <Heading textcol='#FFF'>
                    All done. Let's Begin!
                </Heading>
            </TopContainer>
            <Container flex='2'>
                <Image source={Logo} w={223} h={234}/>
            </Container>
            <BottomContainer flex='0.5'>
                <MainButton buttonText={'Enter'} bg="white" textColor='periwinkle' onPress={() => {user === 'worker' ? navigation.navigate("Whomepage") : navigation.navigate("donorHome")}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider> 
        )
                    
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
    }
})