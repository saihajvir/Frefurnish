import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";
import BigPost from "../comps/BigPost";
import MainPost from "../comps/MainPost";


const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Header = styled.View`
  flex:0.2;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`
const Wrapper = styled.View`
    flex: 0.5;
    padding: 2px;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
`
const NewListing = styled.View`
  flex:1.5;
  background-color: #FFFFFF;
`
const Container = styled.View`
    flex:3;
    flex-direction: row;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    flex:0.5;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export default function Viewlisting({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <Container>
            <MainPost />
        </Container>

        <NewListing>
            <Text fontWeight="700" fontSize={50}>Condition</Text>
            <Text>Lightly Used</Text>
            <Text fontWeight="700" fontSize={50}>Description</Text>
            <Text>Just an old office chair we don't use anymore. Prefer pickup! Thanks!</Text>
        </NewListing>
        <Wrapper>
            <MainButton buttonText="Contact Donor" onPress={() => {navigation.navigate("Donorrequest")}}/> 
        </Wrapper>

        <Navbar>
            <BottomNav/>
        </Navbar>
         
        </ThemeProvider>
    )
}