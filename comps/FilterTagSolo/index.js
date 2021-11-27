import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {  SafeAreaView, FlatList } from 'react-native';
import {Div, ThemeProvider, Button, Input, Icon, Image, Textarea, Overlay, Tag} from 'react-native-magnus';
import Constants from 'expo-constants';
import HalfButton from '../halfbutton';
import MainButton from '../MainButton';

const Tags = styled.Pressable`
    width: 170px;
    height: 40px;
    background-color: ${props => props.tagBgColor};
    border-radius: 10px;
    border-width: 2px;
    margin-bottom: 3%;
    align-items: center;
    justify-content: center;
`
const TagText = styled.Text`
    font-size: 14px;
    font-weight: 400;
`

const FilterTagSolo = ({
    tagText = "default",
    borderColor = "#92A8F8",
    // bgColor = "#ffffff;",
    SelectOnPress = ()=>{},
    DeselectOnPress = ()=>{}
}) => {
    const [isSelected, setIsSelected] = useState(false);

    const SelectTag = () => {
        setIsSelected(false);
    }

    const DeselectTag = () => {
        setIsSelected(true);
    }

    if (isSelected === false) {
        return (
            <Tags 
                onPress={SelectOnPress} 
                onPressIn={SelectTag}
                borderColor={borderColor}
                tagBgColor='#ffffff'
            >
                <TagText>{tagText}</TagText>
            </Tags>
          )
    }
    else {
        return (
            <Tags 
                onPress={DeselectOnPress}
                onPressIn={DeselectTag}
                borderColor={borderColor}
                tagBgColor="#000000"
            >
                <TagText>{tagText}</TagText>
            </Tags>
        )
    }
}

export default FilterTagSolo;