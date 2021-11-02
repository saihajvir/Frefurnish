import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Div, Icon, Text } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

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
            bg='lightgrey'
            rounded={20}
            h={230}
            w={295}
        >
            <Text
                color="black"
                fontWeight="700"
            >
                {uploadText}
            </Text>

             <Icon
            name={iconName}
            fontFamily={iconFamily}
            color='black'
            fontSize={34}
            />

        </Div>
    )
}