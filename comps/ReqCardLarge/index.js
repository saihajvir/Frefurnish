import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const Card = styled.View`
    height: 30%;
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
	align-items: flex-start
`
const Middle = styled.View`
    height: 100%;
    width: 5%;
    z-index: 1;
    display: flex;

`

const PickupCont = styled.View`
    height: 50%;
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
	align-items: flex-start
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
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
	align-items: flex-start
`
const Date = styled.Text`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
	align-items: flex-start
    text-align: left;
    font-size: 20px;
    font-weight: bold;
`



export default function ReqCardLarge({
    pickupText = " ",
    dateText = " ",
    itemImg = " ",
})

{
    return(
        <Card>
            <Left>
                <PickupCont>
                    <Pickup>
                        Pickup Request
                    </Pickup>
                </PickupCont>
                <DateCont>
                    <Date>
                        1:30pm
                        November 1st
                    </Date>
                </DateCont>
            </Left>
            <Middle/>
            <Right>
                <Image
                    h='100%'
                    w='100%'
     
                    rounded={10}
                    source={{
                        uri:
                        "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    }}
                />
            </Right>
        </Card>

    );
}