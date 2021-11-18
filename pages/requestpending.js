import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, Image, StyleSheet } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input, } from 'react-native-magnus';

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
const PickupRequest = styled.View`
  background-color: #FFFFFF;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const Container = styled.View`
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 10px 0 30px 0;
`
const Container2 = styled.View`
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 0 0 20px 0;
`
const RequestText = styled.View`
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5%;
`
const TimeCont = styled.View`
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20%;
`
const RequestCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60%;

`

export default function Requestpending({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <Text fontSize={32} fontWeight="600">Thank You</Text>
            </Container>

            <Container2>
                <Text fontSize={18} color="#92A8F8" fontWeight="600">Your pickup request was sent and is now pending approval from the donor.</Text>
            </Container2>

            <PickupRequest>
                <RequestText>
                    <RequestCont>
                        <Text fontWeight="400" fontSize={20}>Pickup Requested:</Text>
                    </RequestCont>
                    <TimeCont>
                        <Text fontWeight="600" fontSize={20}>1:30 PM</Text>
                        <Text fontWeight="600" fontSize={20}>November 1st</Text>
                    </TimeCont>
                </RequestText>
                <Image 
                    source={require("../assets/toaster.png")}
                    style={styles.img}
                />
            </PickupRequest>

            
            <Text fontWeight="400">You can check your request's status by tapping the request icon in the menu.</Text>
            

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

const styles = StyleSheet.create({
    img:{
        width: 177,
        height: 177,
        borderRadius:10,
    }
})