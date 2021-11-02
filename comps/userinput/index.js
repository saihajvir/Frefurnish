import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import {  SafeAreaView, FlatList } from 'react-native';
import {Div, ThemeProvider, Button, Input, Icon, Image, Textarea,} from 'react-native-magnus';
import Constants from 'expo-constants';

export default class UserInput extends React.Component {
    render() {
    return (
    <ThemeProvider>
            <SafeAreaView style={{ flex: 1 }}>
            <Div pt={10}>

            <Input shadow="lg"
            placeholder="Email Address"
            focusBorderColor="blue700"
            />

            </Div>

            <Div pt={10}>
                

            <Input shadow="lg"
            placeholder="Password"
            mt="md"
            secureTextEntry
            focusBorderColor="blue700"
            />

            </Div>

            <Div pt={10}>

            <Input shadow="lg"
            placeholder="Verfiy your Password"
            mt="md"
            secureTextEntry
            focusBorderColor="blue700"
            />

            </Div>

            <Div pt={20}>

            <Input shadow="lg"
            placeholder="Phone Number"
            focusBorderColor="blue700"
            w={300}
            />

            </Div>

            </SafeAreaView>
    </ThemeProvider>
       
       
        

        
    );
 }
}
