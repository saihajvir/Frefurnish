import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function SmallPost({
    headerText = "Office Chair",
    locationText = "Langley - 30 km",
    imgSrc= "http://placekitten.com/200/400"
}) 
{
    return (
    <Div m="xl">
        <Div>
        <Image
  h={185}
  w={185}
  m={-10}
  source={{
    uri:imgSrc
  }}/>
           
            <Div row alignItems="center">
                <Div flex={1} m={10}>
                    <Text fontSize="xl">
                    {headerText}
                    </Text>
                    <Text color="#808080" fontSize="sm">
                    {locationText}
                    </Text>
                </Div>
            </Div>
        </Div>
    </Div>
    );
}