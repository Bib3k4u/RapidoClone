import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {
    InnerContainer,
    PageTitle,
    StyledFormArea,
    SubTitle,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
   
} from "./../components/styles"


const  Welcome=({navigation}) => {
  return (
    <>
        <StatusBar style="dark"/>
        <InnerContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/3.jpg')} />
            
            <WelcomeContainer>
            <PageTitle welcome={true}>Welcome Buddy!!!</PageTitle>
            <SubTitle welcome={true}>John Parker</SubTitle>
            <SubTitle welcome={true}>example@gmail.com</SubTitle>
                <StyledFormArea>
                <Avatar resizeMode="cover" source={require('./../assets/1.jpg')}/>

                <Line/>
                    <StyledButton onPress={()=> navigation.navigate('Login')}>
                        <ButtonText>
                            LogOut
                        </ButtonText>
                    </StyledButton>
                    
                </StyledFormArea>
            </WelcomeContainer>
        </InnerContainer>
    </>
  )
}
export default Welcome;