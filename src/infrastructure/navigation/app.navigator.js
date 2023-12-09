import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { NewsNavigator } from './news.navigator'
import { SettingsScreen } from '../../features/Settings/screens/SettingsScreen'


const Tabs = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                iconName = 'md-home'
                                break;

                            case 'Settings':
                                iconName = 'md-settings-sharp'
                                break;

                            default:
                                break;
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'gray',
                })}>

                <Tabs.Screen name='Home' component={NewsNavigator} />
                <Tabs.Screen name='Settings' component={SettingsScreen} />

            </Tabs.Navigator>

        </NavigationContainer>
    )
}


