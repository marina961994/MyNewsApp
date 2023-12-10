import React, { useState, useEffect, useContext } from 'react';

import styled from "styled-components/native";
import { Card } from 'react-native-paper';

import Switch from '../components/Switch.component';
import { SafeAreaComponent } from '../../../utils/safe-area.component';

// import { ThemeContext } from '../../../services/Theme.context';
import { LanguageContext } from '../../../services/Language.context';

import '../../../locales/index';
import { useTranslation } from 'react-i18next';

import { Colors } from '../../../theme/index';


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
  font-size : 15px;
`;

export const SettingsScreen = () => {
    const { isEnglish, changeLanguage } = useContext(LanguageContext);
    // const { theme, changeTheme } = useContext(ThemeContext);

    const [isLangEnabled, setIsLangEnabled] = useState(isEnglish);
    const [isModeEnabled, setIsModeEnabled] = useState(true);

    const { t } = useTranslation();

    const toggleLanguage = () => {
        setIsLangEnabled((previousState) => !previousState);
    }

    const toggleMode = () => {
        setIsModeEnabled((previousState) => !previousState);
    }

    useEffect(() => {
        if (isLangEnabled) {
            changeLanguage('en');
        } else {
            changeLanguage('fr');
        }

    }, [isLangEnabled]);


    // useEffect(() => {
    //     if (isModeEnabled) {
    //         changeTheme('light');
    //     } else {
    //         changeTheme('dark');
    //     }

    // }, [isModeEnabled]);

    return (
        <SafeAreaComponent>
            <TitleContainer>
                <ScreenTitle>{t('settings')}</ScreenTitle>
            </TitleContainer>

            <CardView>
                <ItemContainer>
                    <ItemText>{t('changeAppLanguage')}</ItemText>
                    <Switch
                        value={isLangEnabled}
                        onValueChange={toggleLanguage}
                        renderActiveText={true}
                        renderInActiveText={true}
                    />
                </ItemContainer>
            </CardView>

            <CardView>
                <ItemContainer>
                    <ItemText>{t('changeAppMode')}</ItemText>
                    <Switch
                        value={isModeEnabled}
                        onValueChange={toggleMode}
                        renderActiveText={true}
                        renderInActiveText={true}
                        activeText={t('light')}
                        inActiveText={t('dark')} />
                </ItemContainer>
            </CardView>

        </SafeAreaComponent>
    )
}