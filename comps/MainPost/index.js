import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function MainPost({
    headerText = "Office Chair",
    locationText = "Langley - 30 km",
    imgSrc
})
{
    return (
    <Div>
        <Div>
            <Div row alignItems="center" mt={10}>
                <Div flex={1}>
                    <Text fontSize={36} fontWeight="600">
                    {headerText}
                    </Text>
                    <Text color="#808080" fontSize={14} fontWeight="200">
                    {locationText}
                    </Text>
                </Div>
            </Div>
                <Div 
                rounded="xl"
                h={259}
                w={396}
                mt={10}
                mb={10}
                bgImg={imgSrc}
                >
                </Div>
                <Div flexDir="row">
                    <Div
                    rounded="xl"
                    h={70}
                    w={70}
                    mr={10}
                    bgImg={{
                        uri:
                        "http://placekitten.com/200/300",
                    }}
                    >
                    </Div>
                    <Div
                    rounded="xl"
                    h={70}
                    w={70}
                    bgImg={{
                        uri:
                        "http://placekitten.com/200/300",
                    }}
                    >
                    </Div>
                </Div>
        </Div>
    </Div>
    );
}