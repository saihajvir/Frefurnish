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
    <Div m="md">
        <Div>
            <Div
            rounded="xl"
            h={115}
            w={115}
            bgImg={{
                uri:
                "http://placekitten.com/200/300",
            }}
            >
            </Div>
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