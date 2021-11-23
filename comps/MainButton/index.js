import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function MainButton({
    buttonText = "default text",
    iconName = "ios-arrow-forward-circle",
    iconFamily = "Ionicons",
    onPress,
    bg='periwinkle',
    textColor='white',
    iconColor='white',
    mt,
    mb,
}) 
{
    return (
        <Button
            bg={bg}
            block
            color={textColor}
            rounded={10}
            h={50}
            mt={mt}
            mb={mb}
            fontSize={18}
            fontWeight='500'
            suffix={
                <Icon
                 name={iconName} 
                 fontFamily={iconFamily}
                 position='absolute' 
                 right={10} 
                 color={iconColor}
                 fontSize={24}
                />
            }
            onPress={onPress}
        >
            {buttonText}
        </Button>
    );
}