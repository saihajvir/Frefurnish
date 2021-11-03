   
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";

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
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export default function Landing({navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <MainButton buttonText={'Get Started'} bg="white" textColor='periwinkle' onPress={() => {navigation.navigate("Intro")}}/>
            </Container>
            </Wrapper>
        </ThemeProvider>
    )
}