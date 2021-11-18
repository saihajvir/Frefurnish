import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function MainPost({
    headerText = "Office Chair",
    locationText = "Langley",
    imgSrc,
    headerTextSize = 36,
})
{
    return (
        <Div w='100%'>
            <Div row alignItems="center" mt={10}>
                <Div flex={1}>
                    <Text fontSize={headerTextSize} fontWeight="600">
                    {headerText}
                    </Text>
                    <Text color="#808080" fontSize={14} fontWeight="200">
                    {locationText}
                    </Text>
                </Div>
            </Div>
                <Image 
                rounded="xl"
                h={260}
                w='100%'
                mt={10}
                mb={10}
                source={imgSrc}
                />
            </Div>
    );
}