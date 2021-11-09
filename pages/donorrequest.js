import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';

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
  flex:0.6;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`
const NewListing = styled.View`
  flex: 2;
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
    flex:5;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: grey;
`
const Navbar = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export default function Donorrequest({navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Header>
                <Header1 headerText="Request"/>
            </Header>
            <NewListing>
            <Image
                h={100}
                w={100}
                m={10}
                alignSelf="center"
                rounded="circle"
                source={{
                    uri:
                    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                }}
                />
                <Text fontWeight="bold" fontSize={40} pt={20} textAlign="center">John Wick</Text>
            </NewListing>
            <Container >
          
            </Container>
            <Navbar>
                <BottomNav />
            </Navbar>
        </ThemeProvider>
    )
}