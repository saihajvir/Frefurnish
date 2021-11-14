import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar } from 'react-native-magnus';

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
import WorkerProfile from "../comps/WorkerProfile";
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
background-color: #FFFFFF;
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
const PersonInfoContainer = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 15px;
margin-top: 15px;
`
const NameContainer = styled.View`
align-items: center;
justify-content: center;
margin-left: 10px;
`
const Name = styled.Text`
font-size: 32px;
font-weight: bold;
color: black;
`
const WorkplaceContainer = styled.View`

`
const Workplace = styled.Text`
font-size: 14px;
color: #7f7f7f;
`
const MessageCont = styled.View`
flex-direction: column;
margin-top: 50px;
height: 161px;
`
const MessageTitle = styled.Text`
font-size: 14px;
font-weight: bold;
color: black;
`
const MessageText = styled.Text`
font-size: 14px;
font-weight: 300;
color: black;
margin-top: 15px;
`
const Approve = styled.Text`
font-size: 14px;
font-weight: bold;
color: #6CAF61;
`
const Decline = styled.Text`
font-size: 14px;
font-weight: bold;
color: #E25C5C;
`
const ButtonCont = styled.View`
flex-direction: row;
margin-top: 140px;
`


export default function Donorrequest({navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
         
          <Wrapper>

            <Container>
              
              <WorkerProfile profileImg={Julian}></WorkerProfile>
        
                <ReqCardLarge itemImg={Toaster}/>

                <MessageCont>

                  <MessageTitle>
                    Julian is interested in picking up your item!
                  </MessageTitle>

                  <MessageText>
                  If this time works for you press<Approve> approve</Approve>to send your location and contact information.  
                  </MessageText>

                  <MessageText>
                  If not press<Decline> decline</Decline>. 
                  </MessageText>

                </MessageCont>

                <ButtonCont>

                  <HalfButton 
                  bg="#6CAF61" borderColor="#6CAF61" buttonText="Approve" marginRight={16}>
                  </HalfButton>
                  <HalfButton
                  bg="#E25C5C" borderColor="#E25C5C" buttonText="Decline">
                  </HalfButton>

                </ButtonCont>
          
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