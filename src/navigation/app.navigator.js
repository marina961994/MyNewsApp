import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { NewsNavigator } from './news.navigator'
import { SettingsScreen } from '../features/Settings/screens/SettingsScreen'

import '../locales/index';
import { useTranslation } from 'react-i18next';


const Tabs = createBottomTabNavigator();

export const AppNavigator = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case t("home"):
                            iconName = 'md-home'
                            break;

                        case t("settings"):
                            iconName = 'md-settings-sharp'
                            break;

                        default:
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: colors.tabTitle,
            })}>

            <Tabs.Screen name={t("home")} component={NewsNavigator} />
            <Tabs.Screen name={t("settings")} component={SettingsScreen} />

        </Tabs.Navigator>
    )
}