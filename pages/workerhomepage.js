import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import BigPost from "../comps/BigPost";



const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Header = styled.View`
  flex:0.4;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`
const NewListing = styled.View`
  flex:0.5;
  background-color: #FFFFFF;
`
const Wrapper = styled.View`
    flex: 1.5;
    padding: 2px;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
`
const Container = styled.View`
    flex:2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    flex:0.3;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export default function Whomepage({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Header>
                <Header1 />
            </Header>
            <NewListing>
                <Text fontWeight="bold" fontSize={50} pt={20}>New Listings</Text>
            </NewListing>
            <Container >
                <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <BigPost />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <BigPost />
                </TouchableOpacity>
            </Container>
            <Wrapper>
            <MainButton buttonText={'See all Listings'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("Market")}}/>
            </Wrapper>
            <Navbar>
                <BottomNav />
            </Navbar>
        </ThemeProvider>
    )
}