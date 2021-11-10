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
    background-color: #92A8F8;
`
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const BottomContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10%;
`

const Heading = styled.Text`
    font-size: 36;
    font-weight: 600;
    color: white;
`

export default function Landing({navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <Heading>
                    Welcome to Frefurnish.
                </Heading>
            </Container>
            <Container>
                <Image source={ChairIcon} w={160} h={220}/>
            </Container>
            <BottomContainer>
                <MainButton buttonText={'Get Started'} bg="white" textColor='periwinkle' onPress={() => {navigation.navigate("Profile")}}/>
            </BottomContainer>
            </Wrapper>
        </ThemeProvider>
    )
}