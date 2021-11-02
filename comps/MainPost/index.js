import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function MainPost({
    headerText = "Office Chair",
    locationText = "Langley - 30 km"
}) 
{
    return (
    <Div>
        <Div>
            <Div row alignItems="center" m="md">
                <Div flex={1}>
                    <Text fontSize={36} fontWeight="700">
                    {headerText}
                    </Text>
                    <Text color="#808080" fontSize={14} fontWeight="200">
                    {locationText}
                    </Text>
                </Div>
            </Div>
                <Div m="md"
                rounded="xl"
                h={259}
                w={375}
                bgImg={{
                    uri:
                    "http://placekitten.com/200/300",
                }}
                >
                </Div>
                <Div flexDir="row">
                    <Div m="md"
                    rounded="xl"
                    h={70}
                    w={70}
                    bgImg={{
                        uri:
                        "http://placekitten.com/200/300",
                    }}
                    >
                    </Div>
                    <Div m="md"
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