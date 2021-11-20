import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image, Button, Icon } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';



export default function FilterButton({
    buttonWidth = "40%",
    buttonHeight = "100%",
    marginLeft = "0%"
})

{
    return(
        <Div row flexWrap="wrap">
            <Button
                w = {buttonWidth}
                h = {buttonHeight}
                ml = {marginLeft}
                px = "xl"
                py = "lg"
                bg = "white"
                borderWidth = {1}
                rounded = {10}
                bg = "#92A8F8" 
                borderColor = "#92A8F8"
                color = "white"
                underlayColor = "92A8F8"
            >
                <Icon 
                name = "filter" 
                color = "white"
                mr = "10%"
                />
                <Text
                color = "white"

                >
                    Filter Items
                </Text>
            </Button>
        </Div>
    );
}