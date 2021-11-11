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

const Wrapper = styled.View`
    padding: 0 10px 0 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
`
const ListingText = styled.View`
    flex:1;
    padding: 0 10px 0 10px;
    background-color: #FFFFFF;
`
const Container = styled.View`
    flex-direction: row;
    padding: 0 10px 0 10px;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export default function donorListing({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <Container>
            <MainPost />
        </Container>

        <ListingText>
            <Text fontWeight="bold" fontSize={24}>Condition</Text>
            <Text fontSize={14}>Used</Text>
            <Text fontWeight="bold"  fontSize={24}>Description</Text>
            <Text fontSize={14}>Just an old office chair we don't use anymore.</Text>
            <Text fontWeight="bold"  fontSize={24}>Feedback</Text>
        </ListingText>

        <Wrapper>
            <MainButton buttonText="Edit Listing" onPress={() => {navigation.navigate("")}}/> 
        </Wrapper>

        <Navbar>
            <BottomNav/>
        </Navbar>
         
        </ThemeProvider>
    )
}
