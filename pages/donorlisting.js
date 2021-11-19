import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";
import LottieView from 'lottie-react-native';

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input} from 'react-native-magnus';

import HalfButton from "../comps/halfbutton";
import MainPost from "../comps/MainPost";
import MainButton from "../comps/MainButton";
import Chair from '../assets/aeron.jpg';
import Toaster from '../assets/toaster.jpg';
import DonorBottomNav from "../comps/DonorBottomNavBar";


const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      salmon: "#EB8D8D",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Wrapper = styled.View`
  flex: 1;
  padding: 20px 16px 20px 16px;
  background-color: #FFF;
`
const NewListing = styled.View`
  flex:;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  margin-top: 10px;
`
const Container = styled.View`
    flex:1;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 10px 0 0 0;
`
const BottomCont = styled.View`
    flex: 0.2;
    justify-content: space-between;
    flex-direction: row;
`
const FlexCont = styled.View`
flex: 1;

`
const FlexCont2 = styled.View`
flex: 4;
justify-content: center;
align-items: center;
display:flex;

`
const Title = styled.Text`
font-weight: 600;
font-size: 32px;
`;

const AnimCont2 = styled.View`
width: 40%;
height: 40%;

`
const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #EEAB93;
`;


export default function donorListing({route, navigation})
{
    const [state, setState] = useState();

    function handleDeletePress(){
        setState("delete")
    }

if (state === "delete"){
    return(
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <FlexCont>
                    <Title>
                        Your Item Was Removed
                    </Title>
                    <Content/>
                    <Content>
                        Thank you, if you have more items you would like to donate press below
                    </Content>
                </FlexCont>
                <FlexCont2>
                <FlexCont2/>
                    <AnimCont2>
                        <LottieView style={{
                  display: "flex", 
                  justifyContent:"center", 
                  alignItems: "center",}} 
                  source={require('../assets/remove.json')} 
                  autoPlay loop >
                            
                        </LottieView>
                    </AnimCont2>
                </FlexCont2>
                <FlexCont2/>
                <MainButton iconName="" bg="salmon" buttonText="Create Listing" onPress={() => {navigation.navigate('donorListing')}}/>
               
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

    return (
        <ThemeProvider theme={ffTheme}>
        <Wrapper>
            <Container>
                <MainPost imgSrc={Toaster} headerText="Toaster"/>
            </Container>
                <NewListing>
                    <Text fontWeight="600" fontSize={24}>Condition</Text>
                    <Text/>
                    <Text>Lightly Used</Text>
                    <Text mt={10} fontWeight="600" fontSize={24}>Description</Text>
                    <Text/>
                    <Text>It toasts good.</Text>
                </NewListing>
            <BottomCont>
                <HalfButton buttonText='Edit' borderColor='#00000000'onPress={() => {navigation.navigate('NewListing')}}/>
                <HalfButton buttonText='Delete' bg='salmon' borderColor='#00000000' onPress={handleDeletePress}/>
            </BottomCont>
        </Wrapper>
        <DonorBottomNav/>
    </ThemeProvider>
    )
}
