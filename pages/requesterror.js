import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import MainPost from "../comps/MainPost";
import Chair from '../assets/aeron.jpg'
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";
import BigPost from "../comps/BigPost";
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
  padding: 0 16px 0 16px;
  background-color: #FFF;
`
const NewListing = styled.View`
  flex:1;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  
`
const Container = styled.View`
    flex:0.2;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 20px 0 0 0;
`
const BottomCont = styled.View`
    flex: 0.15;
    justify-content: space-around;
    flex-direction: row;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`
const NewListingCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const NewListingCont2 = styled.View`
    flex:1;
    background-color: #FFFFFF;
    margin-top: 20%;
    margin-bottom: 20%;
    justify-content: space-between;
`
const SimilarItemsCont = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`


export default function Requesterror({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <Text fontSize={32} fontWeight="700">Try Again</Text>
            </Container>

            <NewListing>
                <NewListingCont>
                    <Text fontWeight="400" fontSize={22} color="#92A8F8">Unfortunately something went wrong along the way.</Text>
                </NewListingCont>
                <NewListingCont2>
                    <Text fontWeight="600">Some similar items that you may be interested in.</Text>
                    <SimilarItemsCont>
                        <BigPost imgSrc={Chair}/>
                        <BigPost imgSrc={Chair}/>
                    </SimilarItemsCont>
                </NewListingCont2>
            </NewListing>


            <BottomCont>
                <MainButton iconName="" bg="#B9C8FF" buttonText="See All Listings" onPress={() => {navigation.navigate("Requests")}}/> 
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