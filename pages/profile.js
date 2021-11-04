import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv,Avatar, Input } from 'react-native-magnus';

import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";


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
  margin-left: 15px;
`;

const Bio = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  margin-left: 15px;
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

export default function Profile({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
      <ScrollDiv>
      <Div
       bg="#92A8F8"
       p={10}
       alignItems="center"
       >
        <BackButton buttonText="Back"/>
        <Text
        fontSize={24}
        fontWeight="500"
        color="#fff"
        >Profile</Text>
      </Div>
      <Div alignItems="center" flexDir="row" m="xl">
        <Avatar 
        size={50}
        source={{
          uri:
          "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        }}
        />
        <Div pl={10} >
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
        <Div flexDir="row">
        <SmallPost />
        <SmallPost />
        </Div>
      </Div>
      <Div>
        <Sub>
          Past Donations
        </Sub>
        <Div flexDir="row">
        <SmallPost />
        <SmallPost />
        </Div>
      </Div>
      <Div>
        <Sub>
          Location
        </Sub>
        <Input
        placeholder="Map"
        w={396}
        h={139}
        rounded={10}
        m={10}
        />
      </Div>
      <Div>
        <BottomNav />
        
      </Div>
      </ScrollDiv>
    </ThemeProvider>
  )

}