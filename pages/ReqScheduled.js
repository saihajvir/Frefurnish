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
import WorkerProfile from "../comps/ProfileHeader";
import HalfButton from "../comps/halfbutton";

import Toaster from '../assets/toaster.jpg';
import Chair from '../assets/aeron.jpg';
import Julian from '../assets/julian.png';
import Adam from '../assets/adam.jpeg';
import DonorGradient from '../assets/donor-gradient.png';



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
margin-bottom: 75px;
`
const MessageText = styled.Text`
font-size: 14px;
font-weight: 300;
color: black;
margin-top: 15px;
margin-bottom: 15px;
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
justify-content: space-between;
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
justify-content: center;
align-items: center;
display:flex;

`
const AnimCont1 = styled.View`
width: 45%;
height: 45%;

`
const AnimCont2 = styled.View`
width: 40%;
height: 40%;

`


export default function ReqSchedule({navigation})
{
  const [state, setState] = useState();

  function handleYesPress(){
    setState("yes")
    console.log(state)
  }

  function handleNoPress(){
    setState("no")
  }

  function handleRenewPress(){
    setState("renew")
  }

  function handleRemovePress(){
    setState("remove")
  }
    
    
if (state === "yes"){
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
                    You???ve helped reduce waste and provided furniture to a home in need
                </Content>
          </FlexCont>
          <FlexCont2>
              <AnimCont1>
                  <LottieView style={{display: "flex", justifyContent:"center", alignItems: "center",}} source={require('../assets/home.json')} autoPlay loop ></LottieView>
              </AnimCont1>
          </FlexCont2>
          <FlexCont/>
          <FlexCont/>
          <FlexCont>
              <MidText>
                  Your item has been removed from the listings page
              </MidText>
                  <MidText></MidText>
              <MidText>
                  If you have more items you would like to list click <SalmonText>below</SalmonText>
              </MidText>
          </FlexCont>
              <MainButton iconName="" bg="salmon" buttonText="Create New Listing" onPress={() => {navigation.navigate('NewListing')}}/>
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
      
if (state === "no"){
  return (

    <ThemeProvider theme={ffTheme}>
        <Wrapper>
          <FlexCont>
            <Title>
              We're Sorry
            </Title>
          </FlexCont>
            <FlexCont>
              <Content>
                Unfortunately your item was not picked up
              </Content>
            </FlexCont>
            <FlexCont/>
            <FlexCont2>
              <AnimCont2>
                <LottieView style={{display: "flex", justifyContent:"center", alignItems: "center",}} source={require('../assets/box.json')} autoPlay loop ></LottieView>
              </AnimCont2>
            </FlexCont2>
              <FlexCont/>
            <FlexCont>
              <MidText/>
              <MidText/>
                <MidText>
                  To relist your item press <GreenText>renew</GreenText>
                </MidText>
                    <MidText/>
                    <MidText/>
                <MidText>
                  To unlist your item press <SalmonText>remove</SalmonText>
                </MidText>
            </FlexCont>
            <ButtonCont>
                <HalfButton 
                onPress={handleRenewPress} bg="#98C791" borderColor="#6CAF61" buttonText="Renew" >
                </HalfButton>
                <HalfButton
                onPress={handleRemovePress} bg="#EB8D8D" borderColor="#E25C5C" buttonText="Remove">
                </HalfButton>
            </ButtonCont>
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

if (state === "renew"){
  return(
    <ThemeProvider>
      <Wrapper>
        <FlexCont>
          <Title>
            Your Item Was Renewed 
          </Title>
        </FlexCont>
        <FlexCont>
          <Content>
            Your item will be visible for another 7 days
          </Content>
        </FlexCont>
        <FlexCont2>
          <AnimCont2>
                <LottieView style={{
                  display: "flex", 
                  justifyContent:"center", 
                  alignItems: "center",}} 
                  source={require('../assets/check.json')} 
                  autoPlay loop ></LottieView>
            </AnimCont2>
        </FlexCont2>
        <FlexCont2/>
        
        <MainButton iconName="" bg="#F2ABAB" buttonText="View Listing" onPress={() => {navigation.navigate('donorListing')}}/>
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


if (state === "remove"){
  return(
    <ThemeProvider>
      <Wrapper>
        <FlexCont>
          <Title>
            Your Item Was Removed
          </Title>
        </FlexCont>
        <FlexCont>
          <Content>
            Thank you, if you have more items you would like to donate press below
          </Content>
        </FlexCont>
          <FlexCont2>
          <FlexCont2/>
            <AnimCont2>
                    <LottieView style={{display: "flex", justifyContent:"center", alignItems: "center",}} source={require('../assets/remove.json')} autoPlay loop ></LottieView>
              </AnimCont2>
        </FlexCont2>
          <FlexCont2/>
        <MainButton iconName="" bg="#F2ABAB" buttonText="Create Listing" onPress={() => {navigation.navigate('NewListing')}}/>
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
          <Container >
            <WorkerProfile name="Julian Mayes" profileImg={Julian} onPress={() => {navigation.navigate('ViewWorkerProfile')}}></WorkerProfile>
            <MessageText/>
            <ReqCardLarge pickupText="Pick Up Scheduled:" TextColor="#6CAF61" itemImg={Toaster} timeText="1:30pm" dateText="November 1st"/>
            <MessageCont>
                <MessageTitle>
                  Has someone picked up this item?
                </MessageTitle>
                <MessageText>
                  Press<Approve> yes</Approve> if your item was picked up successfully
                </MessageText>
                <MessageText>
                  If your pick up missed or cancelled press <Decline> no</Decline>
                </MessageText>
            </MessageCont>
            <ButtonCont>
                <HalfButton 
                onPress={handleYesPress} bg="#98C791" borderColor="#6CAF61" buttonText="Yes" >
                </HalfButton>
                <HalfButton
                onPress={handleNoPress}  bg="#EB8D8D" borderColor="#E25C5C" buttonText="No">
                </HalfButton>
            </ButtonCont>
          </Container>
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