import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import UserCard from "../comps/UserCard";

import ChairIcon from '../assets/Frefurnish-plain.png'
import UserInput from "../comps/userinput";
import UploadImage from "../comps/UploadImage";

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
    background-color: ${props=>props.bg};
`
const TopContainer = styled.View`
    flex: 0.5;
    width: 100%;
    justify-content: flex-end;
`

const Container = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
`

const BottomContainer = styled.View`
    flex: 1;
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
    textcol='#FFF'

})
{
    const [state, nextState] = useState(0)

    if(state === 0)
    {
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper bg='#92A8F8'>
            <TopContainer>
                <Heading textcol='#FFF'>
                    Welcome to Frefurnish
                </Heading>
            </TopContainer>
            <Container>
                <Image source={ChairIcon} w={160} h={220}/>
            </Container>
            <BottomContainer>
                {/* <MainButton buttonText={'Get Started'} bg="white" textColor='periwinkle' onPress={() => {navigation.navigate("Intro")}}/> */}
                <MainButton buttonText={'Get Started'} bg="white" textColor='periwinkle' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider>
    )}

    if(state === 1)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <Wrapper bg="#FFF">
            <TopContainer>
                <Heading textcol='#92A8F8'>
                    What's your purpose?
                </Heading>
            </TopContainer>
            <Container>
                <UserCard
                    descriptionText='Social workers are individuals who are looking to find listings that will help improve or sustain the quality of life at the social home they work at. Social workers are the only type of user eligible to receive donations.'
                    userType='Social Worker'
                />
                <UserCard
                    descriptionText='Donors are individuals and vendors that are looking to donate their personal items or lightly used returned items and excess inventory.'
                    userType='Donor'
                />
            </Container>
            <BottomContainer>
                <MainButton buttonText={'Next'} bg="periwinkle" textColor='white' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider>
        )
    }
    if(state === 2)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <Wrapper bg="#FFF">
            <TopContainer>
                <Heading textcol='#92A8F8'>
                    Create your account
                </Heading>
            </TopContainer>
            <Container>
                <UploadImage uploadText='Profile Image'/>
                <UserInput/>
            </Container>
            <BottomContainer>
                <MainButton buttonText={'Next'} bg="periwinkle" textColor='white' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider>
        )
    }

    if(state === 3)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <Wrapper bg='#92A8F8'>
            <TopContainer>
                <Heading textcol='#FFF'>
                    All done. Let's Begin!
                </Heading>
            </TopContainer>
            <Container>
                <Image source={ChairIcon} w={160} h={220}/>
            </Container>
            </Wrapper>
        </ThemeProvider>
        )
    }

}