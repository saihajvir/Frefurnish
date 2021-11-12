import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv,Avatar, Input, Image } from 'react-native-magnus';
import MapView from 'react-native-maps';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";
import DonorBottomNav from "../comps/DonorBottomNavBar";
import { StyleSheet, ScrollView, Dimensions } from "react-native";

import Chair from '../assets/aeron.jpg'

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

const Wrapper = styled.View`
flex: 1;
padding: 20px 16px 0 16px;
background-color: #FFF;
`

export default function DonorProfile({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
      <Wrapper>
      <ScrollDiv bg="#fff">
    
      <Div alignItems="center" flexDir="row">
        <Avatar 
        size={100}
        source={{
          uri:
          "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        }}
        />
        <Div ml={10}>
        <Name>
          John Wick
        </Name>
        <LocText>
          Langley, BC
        </LocText>
        </Div>
      </Div>
      <Div mb="xl">
        <Sub>
          Bio
        </Sub>
        <Bio>
            I’m a cool quirky guy :- I love dogs, Mustangs, and donating items I don’t use anymore to make the lives of others better! I don’t like Russians, Common, Boban, Alfie Allen, etc...
        </Bio>
      </Div>
      <Div>
        <Sub>
          Listings
        </Sub>
        <ScrollView horizontal={true}>
        <Div flexDir="row">
        <SmallPost imgSrc={Chair}/>
        <SmallPost imgSrc={Chair}/>
        </Div>
        </ScrollView>
      </Div>
      <Div>
        <Sub>
          Past Donations
        </Sub>
        <ScrollView horizontal={true}>
        <Div flexDir="row">
        <SmallPost imgSrc={Chair} />
        <SmallPost imgSrc={Chair} />
        </Div>
        </ScrollView>
      </Div>
      <Div>
        <Sub>
          Location
        </Sub>
        <MapView style={styles.map} />
      </Div>
      <Div>
        
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