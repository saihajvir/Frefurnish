import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import UserInput from "../comps/userinput";

const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

export default function Listing({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <ScrollDiv>
      <Div
       bg="#92A8F8"
       p={10}
       alignItems="center"
       >
        <BackButton buttonText="Back"/>
        <Text
        fontSize={24}
        fontWeight="500"
        color="#fff"
        >New Listing</Text>
      </Div>
      <Div>
          <UserInput />
      </Div>
      </ScrollDiv>
        </ThemeProvider>
    )

}