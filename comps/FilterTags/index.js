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
import FilterTagSolo from '../FilterTagSolo';

const Container = styled.View`
  width: 390px;
  height: 530px;
  padding: 0;
  border-radius: 10px;
  background-color: #FFFFFF;
  align-items: center;
`
const TopContainer = styled.View`
  flex: 0.7;
  background-color: #FFFFFF;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`
const TopText = styled.Text`
    font-size: 18px;
    font-weight: 600;
`
const TagContainer = styled.View`
    width: 380px;
    height: 360px;
    margin-bottom: 5%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`
// const Tags = styled.Pressable`
//     width: 170px;
//     height: 40px;
//     background-color: #FFFFFF;
//     border-radius: 10px;
//     border-width: 2px;
//     margin-bottom: 3%;
//     align-items: center;
//     justify-content: center;
// `
// const TagText = styled.Text`
//     font-size: 14px;
//     font-weight: 400;
// ` 
const ButtonContainer = styled.View`
    width: 360px;
`

export default function FilterTags({
    onPress = ()=>{}
    
}) {

    const [isSelected, setIsSelected] = useState(false);

    const SelectTag = () => {
        setIsSelected(false);
    }

    const DeselectTag = () => {
        setIsSelected(true);
    }
  return (
    <Container>
        <TopContainer>
            <TopText>Refine your search by choosing tags</TopText>
        </TopContainer>
        <TagContainer>
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />
            <FilterTagSolo />

        </TagContainer>
        <ButtonContainer>
            <MainButton iconName='' bg="#B9C8FF" buttonText="Confirm Tags" 
                onPress={onPress}
            />
        </ButtonContainer>
    </Container>
  )
}
