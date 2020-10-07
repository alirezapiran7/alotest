import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import mainTabs from './bottomNavigation'

import { keys } from '../constants'
import Map from '../screens/main/Map'

const Stack = createStackNavigator()


const mainStack = ({navigation}) => {
    return (
        // <MatinTabs/>
        <Stack.Navigator>
            <Stack.Screen name={keys.mainStack} component={mainTabs} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default mainStack

const styles = StyleSheet.create({})
