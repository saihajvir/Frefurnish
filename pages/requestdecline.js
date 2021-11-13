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
  margin-top: 100px;
`
const Container = styled.View`
    flex:1;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 10px 0 0 0;
`
const BottomCont = styled.View`
    flex: 0.3;
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
    margin-top: 15%;
    margin-bottom: 20%;
    justify-content: space-between;
`
export default function Requestdecline({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <MainPost imgSrc={Chair} headerText="Your Request Was Declined" headerTextSize={28} locationText=""/>
            </Container>

            <NewListing>
                <NewListingCont>
                    <Text fontWeight="400" fontSize={24}>Kitchen Chairs</Text>
                    <Text fontWeight="300" color="#7F7F7F" fontSize={14}>Langley</Text>
                </NewListingCont>
                <NewListingCont2>
                    <Text fontWeight="700">Unfortunately the donor denied your pick up request.</Text>
                    <Text fontWeight="400">If you would like to <Text color="#92A8F8">request</Text> again press below</Text>
                    <Text fontWeight="400">If not press to <Text color="#EB8D8D">remove</Text> the item from your requests page.</Text>
                </NewListingCont2>
            </NewListing>


            <BottomCont>
                {/* <MainButton  buttonText="Request Item" onPress={() => {navigation.navigate("Requests")}}/>  */}
                <HalfButton buttonText="Request" borderColor="#92A8F8" shadow="md"/>
                <HalfButton buttonText="Remove" borderColor="#EB8D8D" bg="#EB8D8D" shadow="md"/>
            </BottomCont>
            </Wrapper>
            
            <BottomNav 
                GoHome={() => {navigation.navigate("Whomepage")}}
                GoListings={() => {navigation.navigate("Market")}}
                GoRequests={() => {navigation.navigate("Requests")}}
                GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
         
        </ThemeProvider>
    )
}