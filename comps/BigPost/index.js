import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function BigPost({
    headerText = "Office Chair",
    locationText = "Langley - 30 km"
}) 
{
    return (
    <Div m="xl">
        <Div>
            <Div
            rounded="xl"
            h={250}
            w={185}
            bgImg={{
                uri:
                "http://placekitten.com/200/300",
            }}
            mb={5}
            >
            </Div>
            <Div row alignItems="center">
                <Div flex={1}>
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