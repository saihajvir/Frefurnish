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
import DonorBottomNav from "../comps/DonorBottomNavBar";
import RequestCard from "../comps/RequestCard";
import ReqCardLarge from "../comps/ReqCardLarge";

import Toaster from '../assets/toaster.jpg';
import Julian from '../assets/julian.png'


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
flex: 1;
padding: 0 16px 0 16px;
background-color: #FFF;
`
const Container = styled.View`
    flex:5;
    flex-direction: column;
   
    
    background-color: white;
`
const Heading = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`
const ReqCont = styled.View`
  flex: 1;
  margin-top: 25px;
  background-color: #FFFFFF;
`



export default function Donorrequest({navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
         
            <Wrapper>
            <Container >
              
                <ReqCardLarge itemImg={Toaster}/>
          
            </Container>
            </Wrapper>
         
            <DonorBottomNav 
                GoHome={() => {navigation.navigate('donorHome')}}
                GoListings={() => {navigation.navigate('NewListing')}}
                GoRequests={() => {navigation.navigate('Donorrequest')}}
                GoProfile={() => {navigation.navigate('DonorProfile')}}
            />
            
        </ThemeProvider>
    )
}