import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function BackButton({
    buttonText = "default",
}) 
{
    return (
        <Button
            bg='white'
            block
            color='periwinkle'
            rounded={15}
            borderColor='black'
            borderStyle="solid"
            borderWidth={1}
            border
            h={40}
            w={75}
            fontSize={19}
            fontWeight='500'
            
            
        >
            {buttonText}
        </Button>
    );
}