import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, View, } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';

import ItemIcon from "../comps/ItemIcon";
import DonorBottomNav from "../comps/DonorBottomNavBar";
import BackButton from "../comps/backbutton";
import ProfileHeader from "../comps/ProfileHeader";
import HalfButton from "../comps/halfbutton";

import ProfileImage from '../assets/john.png'

const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px 0 16px;
  background-color: #FFF;
`
const TopContainer = styled.View`
  flex: 1;
  flex-direction: row;
`
const BottomContainer = styled.View`
  flex: 2;
`
const ButtonContainer = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: space-between;
`
const ImageContainer = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: center;
`
const InputContainer = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`
const TextInp = styled.TextInput`
  height: ${props=>props.height};
  width: 100%;
  background-color: white;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: solid 1px #EB8D8D;
`
const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
} 

export default function EditWorkerProfile({
    route,
    navigation,
    height='40px'
}) {

    function HandleConfirmPress()
    {
        navigation.navigate("DonorProfile")
    }
    return (
    <ThemeProvider theme={ffTheme}>
      <Wrapper>

        <TopContainer>

          <ImageContainer>
            <TouchableOpacity>
            <Image
                h={150}
                w={150}
                rounded="circle"
                source={ProfileImage}
            />
            </TouchableOpacity>
          </ImageContainer>

          <InputContainer>
            <TextInp placeholder='First Name' height={height}/>
            <TextInp placeholder='Last Name' height={height}/>
            <TextInp placeholder='City' height={height}/>
          </InputContainer>

        </TopContainer>

        <BottomContainer>
        <TextInp placeholder='Bio' height='100px' multiline={true}/>
          <TextInp placeholder='Address' height='100px' multiline={true}/>
          <TextInp placeholder='Contact Number' height='100px' multiline={true}/>
        </BottomContainer>

        <ButtonContainer>
          <HalfButton buttonText='Confirm' bg="#6CAF61" borderColor="#6CAF61" onPress={HandleConfirmPress}/>
          <HalfButton  buttonText='Cancel' bg="#E25C5C" borderColor="#E25C5C" onPress={() => {navigation.navigate("DonorProfile")}}/>
        </ButtonContainer>

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