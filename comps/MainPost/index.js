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
    headerTextSize = 34,
})
{
    return (
        <Div w='100%'>
            <Div row alignItems="center">
                <Div flex={1}>
                    <Text fontSize={headerTextSize} fontWeight="600">
                    {headerText}
                    </Text>
                    <Text color="#808080" fontSize={14} fontWeight="200">
                    {locationText}
                    </Text>
                </Div>
            </Div>
            <Div w='100%' h='100%'>
            <ScrollView horizontal={true} >
                <Image 
                rounded={10}
                h={360}
                w={395}
                mt={20}
                mb={50}
                source={imgSrc}
                />
            </ScrollView>

            </Div>
            </Div>
    );
}