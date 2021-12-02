import React from "react";
import { Overlay, Button } from "react-native-magnus";
import { View, Text } from "react-native";
import styled from "styled-components";
import HalfButton from "../halfbutton";

const Container = styled.View`
  width: 300px;
  height: 120px;
  padding: 0;
`
const TextContainer = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: 500;
`
const InnerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export default function ConfirmOverlay({
    visible,
    removeOverlay,
    onDeletePress,
    buttonText='Delete',
    messageText=" Are you sure you're not interested? This request will be deleted",
})

{
    return (
        <Overlay visible={visible} justifyContent='center' alignItems='center'>
            <Container>
                <TextContainer>
                    {messageText}
                </TextContainer>
                <InnerContainer>
                    <HalfButton w={140} bg='#98C791' borderColor='#6CAF61' buttonText='Go Back' onPress={removeOverlay}/>
                    <HalfButton w={140} bg='#EB8D8D' borderColor='#E25C25' buttonText={buttonText}  onPress={onDeletePress}/>
                </InnerContainer>
            </Container>
        </Overlay>
    )
}
