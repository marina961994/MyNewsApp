import React, { useState, useEffect, useContext } from 'react';

import styled from "styled-components/native";
import { Card } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

import Switch from '../components/Switch.component';
import { SafeAreaComponent } from '../../../utils/safe-area.component';

import { LanguageContext } from '../../../services/Language.context';

import { AppContext } from '../../../services/AppContext';

import '../../../locales/index';
import { useTranslation } from 'react-i18next';


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
  padding : 16px;
  margin-top : 30px;
  margin-left : 10px;
  margin-right : 10px;
`;

const ItemContainer = styled.View`flex-direction : row;`;

const ItemText = styled.Text`
  padding : 10px;
  align-items : center;
  margin-right : 45px;
  font-size : 15px;
`;

export const SettingsScreen = () => {
    const { t } = useTranslation();
    const { isEnglish, changeLanguage } = useContext(LanguageContext);
    const [isLangEnabled, setIsLangEnabled] = useState(isEnglish);

    const { colors } = useTheme();
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);

    const toggleLanguage = () => {
        setIsLangEnabled((previousState) => !previousState);
    }

    const toggleTheme = () => {
        setIsDarkTheme((previousState) => !previousState)
    }

    useEffect(() => {
        const language = isLangEnabled ? 'en' : 'fr';
        changeLanguage(language)
    }, [isLangEnabled]);

    return (
        <SafeAreaComponent >
            <TitleContainer>
                <ScreenTitle style={{ color: colors.text }}>
                    {t('settings')}
                </ScreenTitle>
            </TitleContainer>

            <CardView style={{ backgroundColor: colors.cardBg }}>
                <ItemContainer>
                    <ItemText style={{ color: colors.text }}>
                        {t('changeAppLanguage')}
                    </ItemText>
                    <Switch
                        value={isLangEnabled}
                        onValueChange={toggleLanguage}
                        renderActiveText={true}
                        renderInActiveText={true} />
                </ItemContainer>
            </CardView>

            <CardView style={{ backgroundColor: colors.cardBg }}>
                <ItemContainer>
                    <ItemText style={{ color: colors.text }}>
                        {t('changeAppMode')}
                    </ItemText>
                    <Switch
                        value={isDarkTheme}
                        onValueChange={toggleTheme}
                        renderActiveText={true}
                        renderInActiveText={true}
                        activeText={t('light')}
                        inActiveText={t('dark')} />
                </ItemContainer>
            </CardView>

        </SafeAreaComponent>
    )
}