import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Div, Text, Image } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const ImageScroll = styled.ScrollView`
    
`
const { width } = Dimensions.get('window')

export default function MainPost({
    headerText = "Office Chair",
    locationText = "Langley",
    imgSrc,
    headerTextSize = 36,
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
            <ImageScroll horizontal={true} decelerationRate={0} snapToInterval={width - 32} snapToAlignment={"center"} showsHorizontalScrollIndicator={false}>  
                <Image 
                h={260}
                w={396}
                mt={10}
                mb={10}
                source={imgSrc}
                />
                      <Image 
                h={260}
                w={396}
                mt={10}
                mb={10}
                source={imgSrc}
                />
                      <Image 
                h={260}
                w={396}
                mt={10}
                mb={10}
                source={imgSrc}
                />
            </ImageScroll>
        </Div>
    );
}