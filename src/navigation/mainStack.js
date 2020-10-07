import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'


import { keys } from '../constants'
import mainTabs from './bottomNavigation'
import products from '../screens/main/products'
import map from '../screens/main/map'

const Stack = createStackNavigator()


const mainStack = ({navigation}) => {
    return (
        // <MatinTabs/>
        <Stack.Navigator>
            <Stack.Screen name={keys.mainStack} component={mainTabs} options={{headerShown:false}}/>
            <Stack.Screen name={keys.products} component={products} options={{headerShown:false}}/>
            <Stack.Screen name={keys.map} component={map} options={{headerShown:false}}/>
            
        </Stack.Navigator>
    )
}

export default mainStack

const styles = StyleSheet.create({})
