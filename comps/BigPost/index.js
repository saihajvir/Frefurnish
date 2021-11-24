import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text, Image, Button } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function BigPost({
    headerText = "Office Chair",
    locationText = "Langley - 30 km",
    imgSrc=imgSrc,
    onPress
}) 
{
    return (
        <Button bg='#FFF' onPress={onPress}>
        <Div>
        <Image
            h={230}
            w={175}
            minH={100}
            minW={195}
            rounded={10}
            source={imgSrc}
        />
            <Div row alignSelf="flex-start">
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