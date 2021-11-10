import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

// const TitleCont = styled.Div`
//     display: flex;
//     flex-direction: column;
//     background-color: green
//     height: 100px
//     width: 300px
// `

// const ItemTitle = styled.Text`
//     display: flex;
//     flex-direction: column;
//     text-align: left;
//     margin-top: 10%;
//     font-size: 14px;
//     font-weight: 300;
//     color: white;
// `

export default function ReqItem({
    imgSrc= "http://placekitten.com/200/400",
})

{
    return(
        <Div
            borderColor = "green"
            bg = "black"
            opacity = {50}
            borderWidth = {3}
            bgImg = {imgSrc}
            h = "30%"
            w = "55%"
            rounded = {10}
            justifyContent = "center"
            alignItems = "center"
        >
            
            <Text
                color = "white"
                fontSize = {12}
                fontWeight = "bold"
            >
                Approved
            </Text>

        </Div>
        
    );
}