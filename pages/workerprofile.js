import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';

import ItemIcon from "../comps/ItemIcon";
import BottomNav from "../comps/BottomNavBar";
import ChangeProfile from "../comps/changeprofile";

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  } 


export default function WorkerProfilePage ({route, navigation}) {
    const [visible, setVisible] = useState(false);

    return (
        <ThemeProvider theme={ffTheme}>
            <Div
            flexDirection="row"
            height={100}
            alignItems="center"
            justifyContent="flex-start"
            
            >
            <Div
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            ml={15}
            >
                <Avatar
                bg="red300"  
                color="red800"
                >J</Avatar>
            </Div>
            <Div
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            ml={15}
            ><Div>
                <Text
                fontSize={36}
                fontWeight="bold"
                color="black"
                >Julian Mayes</Text>
            </Div>
            <Div>
                <Text
                fontSize={14}
                color="#7f7f7f"
                >Milieu - Children Family Services</Text>
            </Div>
            </Div>
            </Div>
            <Div
            m={15}
            >
                <Text
                fontSize={24}
                fontWeight="500"
                color="black"
                >Description <Button buttonText="Edit" onPress={() => setVisible(true)}>
                Edit
              </Button>
                </Text>
                <Text
                mt="lg"
                fontSize={14}
                >Social worker working for Milieu - a social home trying to provide a better life for the disadvantaged. My goal is to better the lives as many people as possible. I love the work I do and it’s by the help of awesome donors that my goals are achievable. By working together, we can all make a difference for the better :)
                </Text>   
                <Text
                mt="2xl"
                mb="lg"
                fontSize={24}
                fontWeight="500"
                color="black"
                >Looking For <Button buttonText="Edit" onPress={() => {navigation.navigate("EditItems")}}>
                Edit
              </Button>
                </Text>
                <Div
                flexDirection="row"
                justifyContent="space-between"
                flexWrap="wrap"
                >
                    <ItemIcon/>
                    <ItemIcon/>
                    <ItemIcon/>
                    <ItemIcon/>
                </Div>
            </Div>
            <Div
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            >
                <BottomNav/>
            </Div>

        <Modal isVisible={visible}>
          <ChangeProfile
            onPress={() => {
              setVisible(false);
            }}
          >
          </ChangeProfile>
        </Modal>
        </ThemeProvider>
    )
}
