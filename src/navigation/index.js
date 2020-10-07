import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import mainStack from './mainStack'
import Check from '../screens/check'
import Introduction from '../screens/introduction'
import Map from '../screens/main/map'

import {keys} from '../constants'

const Stack =  createStackNavigator();

export default function index() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={keys.check}>
                <Stack.Screen name={keys.check} component={Check} options={{ headerShown: false }} />
                <Stack.Screen name={keys.introduction} component={Introduction} options={{ headerShown: false }} />
                <Stack.Screen name={keys.mainStack} component={mainStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

