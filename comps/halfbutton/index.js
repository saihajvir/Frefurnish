import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function HalfButton({
    buttonText = "default text",
    bg='periwinkle',
    color='white',
    borderWidth='1',
    borderColor='salmon',
    marginRight,
    onPress,
    h=50,
    w=170
}) 
{
    return (
        <Button
            bg={bg}
            block
            color={color}
            rounded={10}
            mr={marginRight}
            h={h}
            w={w}
            fontSize={14}
            fontWeight='500'
            borderWidth={1}
            borderColor={borderColor}
            onPress={onPress}
        >
            {buttonText}
        </Button>
    );
}