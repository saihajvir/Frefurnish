import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const Card = styled.View`
    height: 175px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;

`

const Right = styled.View`
    height: 100%;
    width: 50%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
	align-items: flex-end;
	align-content: flex-start;
`
const Left = styled.View`
    height: 100%;
    width: 45%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
	align-items: flex-start;
`
const Middle = styled.View`
    height: 100%;
    width: 11%;
    z-index: 1;
    display: flex;

`

const PickupCont = styled.View`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
	align-items: flex-start;
`


const Pickup = styled.Text`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
`
const DateCont = styled.View`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
	align-items: flex-start;
`
const Date = styled.Text`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
	align-items: flex-start;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
`



export default function ReqCardLarge ({
    pickupText = "Pick Up Request",
    timeText = "1:30pm",
    dateText = "November 1st",
    textColor = "#6CAF61",
    itemImg
})

{
    return (
        <Card>
            <Left>
                <PickupCont
                color={textColor}>
                    <Pickup>    
                        {pickupText}
                    </Pickup>
                </PickupCont>
                <DateCont>
                    <Date>
                        {timeText}
                    </Date>
                
                    <Date>
                        {dateText}
                    </Date>
                </DateCont>
            </Left>
            <Middle/>
            <Right>
                <Image
                    h={175}
                    w={175}
     
                    rounded={10}
                    source={itemImg}
                />
            </Right>
        </Card>

    );
}