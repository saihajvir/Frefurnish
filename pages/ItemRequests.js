import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";
import LottieView from 'lottie-react-native';

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
      black: "#000000",
      salmon: "#EB8D8D",
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
padding: 20px 16px 20px 16px;
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

const Title = styled.Text`
font-weight: 600;
font-size: 32px;
`;

const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #EEAB93;
`;


const MidText = styled.Text`
font-weight: 500;
font-size: 14px;
`;

const SalmonText = styled.Text`
font-weight: 500;
font-size: 14px;
color: salmon;
`;

const GreenText = styled.Text`
font-weight: 500;
font-size: 14px;
color: #6CAF61;
`;

const Spacer = styled.View`
width: 100%;
height: 5%;
`
const FlexCont = styled.View`
flex: 1;

`
const FlexCont2 = styled.View`
flex: 4;

`
const AnimCont1 = styled.View`
width: 100px;
height: 100px;
justify-content: center;
align-items: center;

`
export default function Donorrequest({navigation})
{
  const [state, setState] = useState();
  function handleApprovePress(){
    setState("approved")
    console.log(state)
  }

  function handleDeclinePress(){
    setState("decline")
  }
    
    
    if (state === "approved"){

    
    return (

      <ThemeProvider theme={ffTheme}>
         
      <Wrapper>
<FlexCont>
        <Title>
            Thank you
        </Title>
</FlexCont>

<FlexCont>
        <Content>
          You’ve helped reduce waste and provided furniture to a home in need
        </Content>
</FlexCont>

<FlexCont2>
    <AnimCont1>
        <LottieView style={{alignSelf:"center", marginRight: 80}}width={150} height={150} source={require('../assets/home.json')} autoPlay loop ></LottieView>
    </AnimCont1>
</FlexCont2>
      
<FlexCont>
        <MidText>
          Your item has been removed from the listings page
        </MidText>
</FlexCont>
<FlexCont>
        <MidText>
        If you have more items you would like to list click <SalmonText>below</SalmonText>
        </MidText>
</FlexCont>


        <MainButton iconName="" bg="salmon" buttonText="Create New Listing" onPress={() => {navigation.navigate('NewListing')}}/>

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
  
  if (state === "decline"){
  return (
    <ThemeProvider theme={ffTheme}>
      <Wrapper>
<FlexCont>
        <Title>
            Don't Give Up!
        </Title>
</FlexCont>

<FlexCont>
        <Content>
          Unfortunately your item was not picked up
        </Content>
</FlexCont>

<FlexCont2>
    <AnimCont1>
        <LottieView style={{alignSelf:"center", marginRight: 80}}width={150} height={150} source={require('../assets/home.json')} autoPlay loop ></LottieView>
    </AnimCont1>
</FlexCont2>
      
<FlexCont>
        <MidText>
          If you would like to relist your item for 7 days press <GreenText>renew</GreenText>
        </MidText>
</FlexCont>
<FlexCont>
        <MidText>
        If you would like to unlist your item press <SalmonText>remove</SalmonText>
        </MidText>
</FlexCont>

        <ButtonCont>

          <HalfButton 
          onPress={handleApprovePress} bg="#6CAF61" borderColor="#6CAF61" buttonText="Renew" marginRight={55}>
          </HalfButton>
          <HalfButton
          onPress={handleDeclinePress} bg="#E25C5C" borderColor="#E25C5C" buttonText="Remove">
          </HalfButton>

        </ButtonCont>
        

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
              
              <WorkerProfile  profileImg={Julian}></WorkerProfile>
        
                <ReqCardLarge itemImg={Toaster}/>

                <MessageCont>

                  <MessageTitle>
                    Julian is interested in picking up your item!
                  </MessageTitle>

                  <MessageText>
                  If this time works for you press<Approve> approve </Approve>to send your location and contact information.  
                  </MessageText>

                  <MessageText>
                  If not press<Decline> decline</Decline>. 
                  </MessageText>

                </MessageCont>

                <ButtonCont>

                  <HalfButton 
                  onPress={handleApprovePress} bg="#6CAF61" borderColor="#6CAF61" buttonText="Approve" marginRight={55}>
                  </HalfButton>
                  <HalfButton
                  onPress={handleDeclinePress} bg="#E25C5C" borderColor="#E25C5C" buttonText="Decline">
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

