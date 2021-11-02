import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import {  SafeAreaView, FlatList } from 'react-native';
import {Div, ThemeProvider, Button, Input, Icon, Image, Textarea,} from 'react-native-magnus';
import Constants from 'expo-constants';

export default class ChangeProfile extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Div>
            <Div 
            m="xl"
            >
              <Div>
                <Div
                  rounded="xl"
                  h={400}
                  w={350}
                  bg="lightgrey"
                >
                <Div>
                <Image
                h={80}
                w={80}
                m={10}
                rounded="circle"
                source={{
                uri:
                "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                }}
                />
                </Div>
                <Div>
                <Text fontWeight="bold" fontSize="6xl" mt="md">
                 First Name
                 </Text>
                </Div>
                <Input
                 placeholder="First name"
                 w={300}
                 focusBorderColor="blue700"
                 m={10}
                />
                <Div>
                <Text fontWeight="bold" fontSize="6xl" mt="md">
                 Last Name
                 </Text>
                 <Input
                 placeholder="Last name"
                 w={300}
                 focusBorderColor="blue700"
                 m={10}
                />
                </Div>
                <Div>
                <Text fontWeight="bold" fontSize="6xl" mt="md">
                 Bio
                 </Text>
                </Div>
                <Div>
                <Button
                    mt="lg"
                    ml="lg"
                    px="xl"
                    py="lg"
                    bg="blue500"
                    color="white"
                    underlayColor="red600"
                >
                    Save Change
                </Button>
                </Div>
                </Div>
                <Div row alignItems="center">
                  <Div flex={1}>
                    
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}
