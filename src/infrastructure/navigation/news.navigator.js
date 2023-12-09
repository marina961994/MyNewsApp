import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NewsDetailsScreen } from '../../features/Home/screens/NewsDetailsScreen';
import { NewsScreen } from '../../features/Home/screens/NewsScreen';

const NewsStack = createStackNavigator();

export const NewsNavigator = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name="News"
                component={NewsScreen} />

            <NewsStack.Screen
                name='NewsDetails'
                component={NewsDetailsScreen} />
        </NewsStack.Navigator>
    )
}
