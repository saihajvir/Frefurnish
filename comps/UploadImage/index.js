import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Div, Icon, Text } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

import Gradient from '../../assets/frefurnish-gradient.png'

export default function UploadImage ({
    uploadText = "default",
    iconFamily = "Feather",
    iconName = "upload",
})
{
    return (
        <Div
            justifyContent="center"
            alignItems="center"
            bg='white'
            rounded='circle'
            h={125}
            w={125}
            m={20}
        >
            <Text
                color="periwinkle"
                fontWeight="600"
                m={10}
            >
                {uploadText}
            </Text>

             <Icon
            name={iconName}
            fontFamily={iconFamily}
            color='periwinkle'
            fontSize={34}
            />

        </Div>
    )
}