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
  flex:0.3;
  flex-direction: row;
  background-color: #FFFFFF;
`
const Container = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    flex:0.2;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export default function Whomepage({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Header>
                <Header1 headerText="Market"/>
            </Header>
            <NewListing>
                <Text fontWeight="bold" fontSize={50} pt={20}>All Listings</Text>
                <Input placeholder="search" w={180} h={40} m={25}/>
            </NewListing>
            <Container>
                <SmallPost />
                <SmallPost />
            </Container>
            <Container>
                <SmallPost />
                <SmallPost />
            </Container>
            <Navbar>
                <BottomNav />
            </Navbar>
        </ThemeProvider>
    )
}