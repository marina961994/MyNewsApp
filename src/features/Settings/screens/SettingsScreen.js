import React, { useState } from 'react'

import styled from "styled-components/native";
import { Card } from 'react-native-paper';

import Switch from '../components/Switch.component';
import { SafeAreaComponent } from '../../../utils/safe-area.component'


const TitleContainer = styled.View`
  align-items : center;
  margin-top : 10px;
  margin-bottom : 20px;
`;

const ScreenTitle = styled.Text`
  padding : 18px;
  font-size : 28px;
`;

const CardView = styled(Card)`
  margin-top : 30px;
  padding : 16px;
  margin-top : 25px;
  margin-left : 15px;
  margin-right : 15px;
`;

const ItemContainer = styled.View`
  flex-direction : row;
`;

const ItemText = styled.Text`
  padding : 10px;
  align-items : center;
  margin-right : 45px;
  font-size : 18px;
`;

const Space = styled.View`
  margin-top : 30px;
`;

export const SettingsScreen = () => {
    const [isLangEnabled, setIsLangEnabled] = useState(false);
    const [isModeEnabled, setIsModeEnabled] = useState(false);

    const toggleLanguage = () => {
        setIsLangEnabled((previousState) => !previousState);
    }

    const toggleMode = () => {
        setIsModeEnabled((previousState) => !previousState);
    }

    return (
        <SafeAreaComponent>
            <TitleContainer>
                <ScreenTitle>Settings</ScreenTitle>
            </TitleContainer>

            <CardView>
                <ItemContainer>
                    <ItemText>Change App Language</ItemText>
                    <Switch
                        value={isLangEnabled}
                        onValueChange={toggleLanguage}
                        renderActiveText={true}
                        renderInActiveText={true} />
                </ItemContainer>
            </CardView>

            <CardView>
                <ItemContainer>
                    <ItemText>Change App Mode</ItemText>
                    <Switch
                        value={isModeEnabled}
                        onValueChange={toggleMode}
                        renderActiveText={true}
                        renderInActiveText={true}
                        activeText='Light'
                        inActiveText='Dark' />
                </ItemContainer>
            </CardView>

        </SafeAreaComponent>
    )
}