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

                <Input shadow="sm"
                placeholder="Name"
                focusBorderColor="#92A8F8"
                w={396}
                />

                </Div>
        
            <Div pt={10}>

            <Input shadow="sm"
            placeholder="Email Address"
            mt="md"
            focusBorderColor="#92A8F8"
            w={396}
            />

            </Div>

            <Div pt={10}>
                

            <Input shadow="sm"
            placeholder="Password"
            mt="md"
            secureTextEntry
            focusBorderColor="#92A8F8"
            />

            </Div>

            <Div pt={10}>

            <Input shadow="sm"
            placeholder="Verfiy your Password"
            mt="md"
            secureTextEntry
            focusBorderColor="#92A8F8"
            />

            </Div>

            <Div pt={20}>

            <Input shadow="sm"
            placeholder="Phone Number"
            focusBorderColor="#92A8F8"
            w={396}
            />

            </Div>

            <Div pt={20}>

            <Input shadow="sm"
            placeholder="Description"
            focusBorderColor="#92A8F8"
            w={396}
            h={100}
            />

            </Div>


            </SafeAreaView>
    </ThemeProvider>
       
       
        

        
    );
 }
}
