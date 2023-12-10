import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NewsDetailsScreen } from '../features/Home/screens/NewsDetailsScreen';
import { NewsScreen } from '../features/Home/screens/NewsScreen';

import '../locales/index';
import { useTranslation } from 'react-i18next';

const NewsStack = createStackNavigator();

export const NewsNavigator = () => {
    const { t } = useTranslation();

    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name="News"
                component={NewsScreen}
                options={{ title: '' }} />

            <NewsStack.Screen
                name='NewsDetails'
                component={NewsDetailsScreen}
                options={{ title: t('newsDetails') }}
            />
        </NewsStack.Navigator>
    )
}
