import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";
import BigPost from "../comps/BigPost";
import MainPost from "../comps/MainPost";
import ReqCardLarge from "../comps/ReqCardLarge";

import Chair from '../assets/aeron.jpg'
import WorkerGradient from '../assets/worker-gradient.png';

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }


const Wrapper = styled.View`
  flex: 1;
  padding: 20px 16px 0 16px;
  background-color: #FFF;
`
const NewListing = styled.View`
  flex:1;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
`
const Container = styled.View`
  flex:1;
  flex-direction: row;
  background-color: #FFFFFF;
`
const BottomCont = styled.View`
  flex: 0.2;
  justify-content: space-between;
  flex-direction: row;
`
const FlexCont = styled.View`
  flex: 1;
`
const MidText = styled.Text`
  font-weight: 500;
  font-size: 14px;
`
const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`
const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #92A8F8;
padding: 10px 0 0 ;
`;


export default function Viewlisting({route, navigation})
{
    const [requested, setRequested] = useState(false); 
    console.log(requested)

    if(requested === true)
    {
        return (
            <ThemeProvider theme={ffTheme}>         
            <Wrapper>
              <FlexCont>
                    <Title>
                       Thank you
                    </Title>
                  <Content>
                      Your pick up request was sent and is now pending approval from the donor.
                  </Content>
              </FlexCont>
              <FlexCont>
                <ReqCardLarge pickupText={"Pick Up Requested"} textColor={"#6CAF61"} itemImg={Chair} timeText='Time Pending Donor Approval' dateText=''/>
              </FlexCont>
                <FlexCont/>
              <FlexCont>
                    <MidText>
                        You can check your request’s status by tapping the request icon in the menu.
                    </MidText>
              </FlexCont>
                <FlexCont/>
            </Wrapper>
            <BottomNav gradientImg={WorkerGradient}
                GoHome={() => {navigation.navigate("Whomepage")}}
                GoListings={() => {navigation.navigate("Market")}}
                GoRequests={() => {navigation.navigate("Requests")}}
                GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
                  
          </ThemeProvider>
        )
    }
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <MainPost imgSrc={Chair}/>
            </Container>

            <NewListing>
                <Text fontWeight="600" fontSize={24}>Condition</Text>
                <Text>Lightly Used</Text>
                <Text mt={10} fontWeight="600" fontSize={24}>Description</Text>
                <Text>Just an old office chair we don't use anymore. Prefer pickup! Thanks!</Text>
            </NewListing>

            <BottomCont>
                <MainButton iconName='' bg="#B9C8FF" mb={10} buttonText="Request Item" onPress={() => {setRequested(true)}}/> 
            </BottomCont>
            </Wrapper>
            
            <BottomNav gradientImg={WorkerGradient}
                GoHome={() => {navigation.navigate("Whomepage")}}
                GoListings={() => {navigation.navigate("Market")}}
                GoRequests={() => {navigation.navigate("Requests")}}
                GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
         
        </ThemeProvider>
    )
}