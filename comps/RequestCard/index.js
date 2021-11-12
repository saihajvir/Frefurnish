import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const Card = styled.View`
    height: 126px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px #dfdfdf ;
    display: flex;
    flex-direction: row;
`
const Left = styled.View`
    height: 100%;
    width: 30%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
    margin-top: 30%;
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
`
const Right = styled.View`
    height: 100%;
    width: 35%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export default function RequestCard({
    profileImg = " ",
    nameText = "Julian Mayes",
    companyText = "Milieu - Children Family Services",

    pickupText = " ",
    dateText = " ",
    itemImg = " ",

})

{
    return(
       <Card>
           <Left>
                <Image
                        h='50%'
                        w='60%'
                
                        rounded="circle"
                        source={{
                            uri:
                                    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                                }}
                />

                <Text
                mt = '5%'
                >
                    Julian Mayes
                </Text>

                <Text
                fontSize = {10}
                fontWeight = '200'
                textAlign = 'center'
                >
                    Milieu - Children Family Services
                </Text>
           </Left>

            <Middle>
                <Pickup>
                    Pickup Request
                </Pickup>

                <Date>
                    1:30 pm
                    November 1st
                </Date>

            </Middle>

            <Right>
                <Image
                    h='90%'
                    w='95%'
                    mr = '5%'
            
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