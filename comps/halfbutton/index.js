import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function HalfButton({
    buttonText = "default text",
    bg='periwinkle',
}) 
{
    return (
        <Button
            bg={bg}
            block
            color='white'
            rounded={20}
            h={50}
            w={200}
            fontSize={19}
            fontWeight='500'
            
            
        >
            {buttonText}
        </Button>
    );
}