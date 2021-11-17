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

import Chair from '../assets/aeron.jpg'
import HalfButton from "../comps/halfbutton";

const ffTheme = {
    colors: {
        periwinkle: "#92A8F8",
        lavender: "#7367F0",
        white: "#FFFFFF",
        black: "#000000"
    }
}

const Title = styled.Text`
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 2%;
    margin-top: 5%;
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
  margin: 2% 0;
  margin-left: 2%;
`;

const Info = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;

const Location = styled.Text`
    font-weight: 500;
    font-size: 14px;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 1%;
`;

export default function Requested({ route, navigation }) {
    return (
        <ThemeProvider theme={ffTheme}>
            <ScrollDiv bg="#fff">
                <Title>Your Pick Up Was Approved</Title>
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
                            (604)607-5525
                        </Info>
                    </Div>
                </Div>
                <Location>
                    27157 Fraser Hwy 2A Langley BC V4W 3R1
                    </Location>
                <MapView style={styles.map} />
                <Location>
                    Have you picked up this item?
                </Location>
                <Div style={styles.choice}>
                    <HalfButton buttonText="Yes" bg="green600" />
                    <HalfButton buttonText="No Longer Interested" bg="red600" />
                </Div>
            </ScrollDiv>

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
        height: 139,
        marginLeft: 15,
    },

    img:{
        width:177,
        height: 177,
        borderRadius:10,
    },
    
    scheduled:{
        justifyContent: "space-between",
        flexDirection: "row",
        margin: "2%",
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
        marginLeft: "3%",
    },
    
    number:{
        marginRight:"2%",
    },

    choice:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "2%",
        marginTop: "5%"
    },
});