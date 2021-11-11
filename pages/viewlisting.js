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

import Chair from '../assets/aeron.jpg'

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

const NewListing = styled.View`
  flex:1.5;
  background-color: #FFFFFF;
`
const Container = styled.View`
    flex:2.5;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 10px 0 0 0;
`
const Navbar = styled.View`
    flex:0.5;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`

export default function Viewlisting({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <Container>
                    <MainPost imgSrc={Chair}/>
                </Container>

                <NewListing>
                    <Text fontWeight="600" fontSize={24}>Condition</Text>
                    <Text>Lightly Used</Text>
                    <Text fontWeight="600" fontSize={24}>Description</Text>
                    <Text>Just an old office chair we don't use anymore. Prefer pickup! Thanks!</Text>
                </NewListing>
                <MainButton buttonText="Contact Donor" onPress={() => {navigation.navigate("Donorrequest")}}/> 
            </Wrapper>
            
            <BottomNav 
                GoHome={() => {navigation.navigate("Whomepage")}}
                GoListings={() => {navigation.navigate("Market")}}
                GoRequests={() => {navigation.navigate("Requests")}}
                GoProfile={() => {navigation.navigate("Profile")}}
            />
         
        </ThemeProvider>
    )
}