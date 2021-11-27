import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text, Image, Button } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function SmallPost({
    headerText = "Office Chair",
    locationText = "Langley",
    imgSrc= "http://placekitten.com/200/400",
    h=115,
    w=115,
    minH=115,
    minW=115,
    onPress
}) 
{
    return (
    <Button  bg='white' onPress={onPress}>
        <Div>
            <Div
            rounded="xl"
            h={h}
            w={w}
            minW={minW}
            minH={minH}
            bgImg={imgSrc}
            >
            </Div>
            <Div row alignItems="center">
                <Div flex={1} mt={5}>
                    <Text fontSize="xl">
                    {headerText}
                    </Text>
                    <Text color="#808080" fontSize="sm">
                    {locationText}
                    </Text>
                </Div>
            </Div>
        </Div>
    </Button>
    );
}