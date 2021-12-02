import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input, Image } from 'react-native-magnus';


import DonorBottomNav from '../comps/DonorBottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import UserInput from "../comps/userinput";
import ItemIcon from "../comps/ItemIcon";
import MainButton from "../comps/MainButton";
import HalfButton from "../comps/halfbutton";

import Toaster from "../assets/toaster.png";
import DonorGradient from '../assets/donor-gradient.png';

const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    salmon: "#EB8D8D",
    white: "#FFFFFF",
    black: "#000000"
  }
}

const Title = styled.Text`
  font-weight: 600;
  padding-top: 20px;
  font-size: 24px;
  margin-bottom:10px;
`;

const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin-bottom:10px;
`;
const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`

export default function EditListing({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <Wrapper>
        <ScrollDiv>
      <Div pb={10}>
        <Title>
          Edit Your Listing
        </Title>
        <Input shadow="sm"
            placeholder="Toaster"
            focusBorderColor="salmon"
            borderColor='salmon'
            mb={10}
            />
            <Input shadow="sm"
            placeholder="Langley"
            focusBorderColor="salmon"
            borderColor='salmon'
            mb={10}
            />
            <Input shadow="sm"
            placeholder="Lightly Used"
            focusBorderColor="salmon"
            borderColor='salmon'
            mb={10}
            />
            <Input shadow="sm"
            placeholder="Tags"
            focusBorderColor="salmon"
            borderColor='salmon'
            />
          <Div flexDir='row' h={50} justifyContent='space-between' mt={10}>
            <HalfButton bg='#F2ABAB' color='white' buttonText='Pick Up'/>
            <HalfButton bg='white' color='black' buttonText='Drop Off'/>
          </Div>
      </Div>
      <Div pb={10}>
        <SubTitle>
          Edit Description
        </SubTitle>
          <Input h={100} borderColor='salmon' placeholder='It toasts good.'/>
      </Div>
      <Div>
        <SubTitle>
          Edit Images
        </SubTitle>
      </Div>
      <Div 
      flexDir="row"
      justifyContent='space-between'
      flex={1}
      pt={10}
      pb={10}
      >
        <Image
        rounded={10}
        w={100}
        h={137}
        source={Toaster}
        />
        <Input 
        w={100}
        h={137}/>
        <Input 
        w={100}
        h={137}/>
      </Div>
        <MainButton iconName='' mt={10} buttonText="Save" bg='#F2ABAB' onPress={() => {navigation.navigate('donorListing')}}/>
      <Div>
      </Div>
      </ScrollDiv>
      </Wrapper>
      <DonorBottomNav gradientImg={DonorGradient}
        GoHome={() => {navigation.navigate('donorHome')}}
        GoListings={() => {navigation.navigate('NewListing')}}
        GoRequests={() => {navigation.navigate('Donorrequest')}}
        GoProfile={() => {navigation.navigate('DonorProfile')}}
      />
        </ThemeProvider>
    )

}