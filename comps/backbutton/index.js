import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function BackButton({
    buttonText = "default",
    onPress = () =>{},
    borderColor = "periwinkle",
    textColor = "periwinkle",
    
}) 
{
    return (
        <Button
            bg='white'
            block
            color={textColor}
            rounded={10}
            borderColor={borderColor}
            borderStyle="solid"
            borderWidth={1}
            border
            h={36}
            w={75}
            fontSize={10}
            fontWeight='500'
            onPress={onPress}
            
        >
            {buttonText}
        </Button>
    );
}