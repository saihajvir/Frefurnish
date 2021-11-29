import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ActivityIndicator } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input, Modal, } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";

import KChairs from '../assets/kitchen-chairs.jpg'
import Chair from '../assets/aeron.jpg'
import Table from '../assets/table.jpg'
import Sofa from '../assets/sofa.jpg'
import Bookshelf from '../assets/bookshelf.jpg'
import Toaster from '../assets/toaster.jpg'
import FilterButton from "../comps/FilterButton";
import FilterTags from "../comps/FilterTags";
import WorkerGradient from '../assets/worker-gradient.png';

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Header = styled.View`
  flex:0.2;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`
const NewListing = styled.View`
  flex:0.3;
  flex-direction: row;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: flex-end;
`
const Container = styled.View`
    flex:3;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`
const FilterCont = styled.View`
    flex: 1;
  
    justify-content: center;
    align-items: center;
`

export default function Market({route, navigation}) {
    const [visible, setVisible] = useState(false);

    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <ScrollView>
            <NewListing>
                <Text fontWeight="600" fontSize={36} pt={20}>All Listings</Text>
                <FilterButton buttonHeight="65%" buttonWidth="40%" marginLeft="10%" 
                    onPress={() => setVisible(true)}>
                </FilterButton>
                    
                <Modal isVisible={visible} bg="rgba(255,255,255, 0.3)" h="100%">
                    <FilterCont>
                    <FilterTags onPress={() => {
                        setVisible(false);
                        }}>
                    </FilterTags>
                    </FilterCont>
                </Modal>
                
            </NewListing>

            
            
            <Container>
                <SmallPost h={185} w={185} headerText='2 Seat Couch' imgSrc={Sofa} onPress={() => {navigation.navigate("Viewlisting")}}/>
                <SmallPost h={185} w={185} headerText='Dinner Table' imgSrc={Table} onPress={() => {navigation.navigate("Viewlisting")}}/>
            </Container>
            <Container>
                <SmallPost h={185} w={185} headerText='Office Chair' imgSrc={Chair} onPress={() => {navigation.navigate("Viewlisting")}}/>
                <SmallPost h={185} w={185} headerText='Toaster' imgSrc={Toaster} onPress={() => {navigation.navigate("Viewlisting")}}/>
            </Container>
            <Container>
                <SmallPost h={185} w={185} headerText='Kitchen Chairs' imgSrc={KChairs} onPress={() => {navigation.navigate("Viewlisting")}}/>
                <SmallPost h={185} w={185} headerText='Bookshelf' imgSrc={Bookshelf} onPress={() => {navigation.navigate("Viewlisting")}}/>

            </Container>
        
            </ScrollView>
            </Wrapper>
            
            <BottomNav gradientImg={WorkerGradient}
            GoHome={() => {navigation.navigate("Whomepage")}}
            GoListings={() => {navigation.navigate("Market")}}
            GoRequests={() => {navigation.navigate("Requests")}}
            GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
        </ThemeProvider>
    )
}