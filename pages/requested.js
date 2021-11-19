import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Avatar, Input } from 'react-native-magnus';
import MapView from 'react-native-maps';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";
import { StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import LottieView from "lottie-react-native";
import MainButton from "../comps/MainButton";

import Chair from '../assets/aeron.jpg'
import HalfButton from "../comps/halfbutton";
import ConfirmOverlay from "../comps/ConfirmOverlay";

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000",
      salmon: "#EB8D8D",
    }
  }

const Title = styled.Text`
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 2%;

`;

const Pickup = styled.Text`
    font-weight: 500;
    font-size: 20px;
    color: rgba(108, 175, 97, 0.7);
`;

const Time = styled.Text`
    font-weight: 600;
    font-size: 20px;
`;

const Sub = styled.Text`
  font-weight: 500;
  font-size: 32px;
  padding: 10px 0 10px 0;
`;

const Info = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;

const Location = styled.Text`
    font-weight: 500;
    font-size: 14px;
    margin-top: 2%;
    margin-bottom: 1%;
`;

const Container = styled.View`
    flex: ${props=>props.flex};
    justify-content: center;
`
const Wrapper = styled.View`
  flex: 1;
  padding: 20px 16px 0 16px;
  background-color: #FFF;
`
const AnimCont1 = styled.View`
width: 50%;
height: 50%;
`
const MidText = styled.Text`
font-weight: 500;
font-size: 14px;

`;

const FlexCont = styled.View`
flex: 1;

`
const FlexCont2 = styled.View`
flex: 4;
justify-content: flex-start;
align-items: center;

`

const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #EEAB93;
`;
const SalmonText = styled.Text`
font-weight: 500;
font-size: 14px;
color: salmon;
`;



export default function Requested({
    route,
    navigation,
    flex='1'
}) {

    const [yes, setYes] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    function HandleDeletePress()
    {
        setOverlayVisible(false)
        if(overlayVisible===false)
        {
            navigation.navigate('Requests');
        }
    }
    if (yes === true){
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
                        <LottieView style={{display: "flex", justifyContent:"center", alignItems: "center",}} source={require('../assets/home.json')} autoPlay loop ></LottieView>
                    </AnimCont1>
                </FlexCont2>
            </Wrapper>
            <BottomNav
                GoHome={() => { navigation.navigate("Whomepage") }}
                GoListings={() => { navigation.navigate("Market") }}
                GoRequests={() => { navigation.navigate("Requests") }}
                GoProfile={() => { navigation.navigate("Profile") }}
            />
          </ThemeProvider>
        )
      }

    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <Title>Your Pick Up was Approved</Title>
                <Div style={styles.scheduled}>
                    <Div style={styles.scheduled_text}>
                        <Pickup>Pickup Scheduled:</Pickup>
                        <Div>
                        <Time>1:30 pm</Time>
                        <Time>November 1st</Time>
                        </Div>
                    </Div>
                    <Div>
                        <Image 
                        source={require("../assets/toaster.png")}
                        style={styles.img}
                        />
                    </Div>
                </Div>
                <Container flex={flex}>
                <Sub>Contact Info</Sub>
                <Div style={styles.info}>
                    <Div style={styles.info_left}>
                    <Avatar
                        mr={10}
                        size={50}
                        source={{
                            uri:
                                "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                        }}
                    />
                        <Info>
                            John Wick
                        </Info>
                    </Div>
                    <Div style={styles.number} >
                        <Info>
                            (604) 607-5525
                        </Info>
                    </Div>
                </Div>
                <Location>
                    27157 Fraser Hwy 2A Langley BC V4W 3R1
                </Location>
                </Container>
                
                <Container flex='1.5'>
                    <MapView style={styles.map} />
                </Container>

                <Container flex={flex}>
                <Location>
                    Have you picked up this item?
                </Location>
                <Div style={styles.choice} flex='1'>
                    <HalfButton buttonText="Yes" bg="#6CAF61" borderColor='#6CAF61' onPress={() => {setYes(true)}}/>
                    <HalfButton buttonText="No Longer Interested" bg="#E25C5C" borderColor='#E25C5C' onPress={() => {setOverlayVisible(true)}} />
                </Div>
                </Container>
            </Wrapper>

            <ConfirmOverlay visible={overlayVisible} removeOverlay={() => {setOverlayVisible(false)}} onDeletePress={() => {navigation.navigate("Requests")}}/>
            <BottomNav
                GoHome={() => { navigation.navigate("Whomepage") }}
                GoListings={() => { navigation.navigate("Market") }}
                GoRequests={() => { navigation.navigate("Requests") }}
                GoProfile={() => { navigation.navigate("Profile") }}
            />

        </ThemeProvider>
    )

}

const styles = StyleSheet.create({
    map: {
        width: 396,
        height: 200,
    },

    img:{
        width:177,
        height: 177,
        borderRadius:10,
    },
    
    scheduled:{
        justifyContent: "space-between",
        flexDirection: "row",
    },

    scheduled_text:{
        justifyContent:"space-between",
    },

    info:{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: "4%",
    },

    info_left:{
        alignItems: "center",
        flexDirection: "row",
    },
    
    number:{
    },

    choice:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
        flex: 1,
    },
});