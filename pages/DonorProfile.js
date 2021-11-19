import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv,Avatar, Input, Image } from 'react-native-magnus';
import MapView from 'react-native-maps';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";
import EditButton from "../comps/EditButton";
import DonorBottomNav from "../comps/DonorBottomNavBar";
import { StyleSheet, ScrollView, Dimensions } from "react-native";

import Chair from '../assets/aeron.jpg';
import John from '../assets/john.png';
import WorkerProfile from "../comps/ProfileHeader";


const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

const Sub = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;

const Bio = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Name = styled.Text`
  font-weight: 600;
  font-size: 36px; 
`;

const LocText = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: #7F7F7F;
`;

const EditText = styled.Text`
  font-weight: 300;
  font-size: 11px;
  color: white;
`;

const Wrapper = styled.View`
flex: 1;
padding: 20px 16px 0 16px;
background-color: #FFF;
`
const EditCont = styled.View`

width:361px;
justify-content: flex-end;
align-items: flex-end;

`

export default function DonorProfile({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
      <Wrapper>
      <ScrollDiv bg="#fff">
    
    <WorkerProfile name='John Wick' workPlace='Langley, BC' profileImg={John}/>

      <Div>
        <Sub>
          Bio

        </Sub>
        <Bio>
        I’m a cool quirky guy. I love dogs, Mustangs, and donating items I don’t use anymore to make the lives of others better! I don’t like Russians, Common, Boban, Alfie Allen, etc...
        </Bio>
        <Sub>
          Address
          
        </Sub>

        <Bio>
        27157 Fraser Hwy 2A 
        Aldergrove BC V4W 3R1
        </Bio>
        <Sub>
         Contact Number
        </Sub>

        <Bio>
        (604)-607-5525
        </Bio>
       
      </Div>
      
      
      
      </ScrollDiv>
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

const styles = StyleSheet.create({
  map: {
    width: 396,
    height: 139,
  },
});