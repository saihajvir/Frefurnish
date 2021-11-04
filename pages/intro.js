import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';

const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

export default function Intro({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <Div>
            <Text>Intro page</Text>
            <MainButton buttonText={'Worker Profile'} bg="white" textColor='periwinkle' onPress={() => {navigation.navigate("WorkerProfilePage")}}/>
            <MainButton buttonText={'Edit Items'} bg="white" textColor='periwinkle' onPress={() => {navigation.navigate("EditItems")}}/>

        </Div>
        </ThemeProvider>
    )

}