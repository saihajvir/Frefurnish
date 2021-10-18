import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function MainButton({
    buttonText = "default text",
    iconName = "ios-arrow-forward-circle",
    iconFamily = "Ionicons"
}) 
{
    return (
        <Button
            bg='periwinkle'
            block
            color='white'
            rounded={20}
            h={50}
            fontSize={18}
            fontWeight='500'
            suffix={
                <Icon
                 name={iconName} 
                 fontFamily={iconFamily}
                 position='absolute' 
                 right={10} 
                 color='white' 
                 fontSize={24}
                />
            }
        >
            {buttonText}
        </Button>
    );
}