import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image, Button } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const Card = styled.View`
    height: 126px;
    width: 396px;
    background-color: white;
    border-radius: 10px;
    border: 2px solid #EB8D8D;
    display: flex;
    flex-direction: row;
`
const Left = styled.View`
    height: 100%;
    width: 33%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Middle = styled.View`
    height: 100%;
    width: 35%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
`
const Pickup = styled.Text`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
    margin-right: 10px;

`
const Date = styled.Text`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
    margin-top: 25px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
`
const Right = styled.View`
    height: 100%;
    width: 32%;
    z-index: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export default function RequestCard({
    profileImg,
    nameText = "Julian Mayes",
    companyText = "Milieu - Children Family Services",
    fontColor = "black",
    pickupText = "Pickup Request:",
    timeText = "1:30pm",
    dateText = "November 1st",
    itemImg,
    onpress
    

})
{
    console.log(itemImg, "ITEM IMG")
    return(
    <Button onPress={onpress} bg="#00000000"  rounded={10} underlayColor="red100">
       <Card>
           <Left>
                <Image
                        h='50%'
                        w='50%'
                
                        rounded="circle"
                        source={profileImg}
                />

                <Text
                mt = '5%'
                >
                    {nameText}
                </Text>

                <Text
                fontSize = {10}
                fontWeight = '200'
                textAlign = 'center'
                >
                    {companyText}
                </Text>
                
           </Left>

            <Middle>
                <Pickup>
                    <Text
                    color = {fontColor}>
                    {pickupText}
                    </Text>
                    
                </Pickup>


                <Date>
                    {timeText}
                </Date>

                <Date>
                    {dateText}
                </Date>

              

            </Middle>

            <Right>
                <Image
                    h='95%'
                    w='95%'
                    
                    
            
                    rounded={10}
                    source={itemImg}
                />
                
            </Right>
       </Card>
    </Button>
    
    );
}