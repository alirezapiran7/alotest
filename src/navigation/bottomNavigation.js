
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { keys } from '../constants';
import Categories from '../screens/main/Categories'
import Orders from '../screens/main/Orders'
import { TabBarIcon, TabBarText } from '../compnents/bottomTabItem';
import { ICON_TYPE } from '../icons';


const Tab = createBottomTabNavigator();

const bottomNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={keys.home}>

           

            <Tab.Screen name={keys.myOrders} component={Orders}
            options={{
                tabBarLabel: ({ focused }) => <TabBarText focused={focused} text="سفارش های من"  />,
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="clock"  />,
            }}/>

            <Tab.Screen name={keys.home} component={Categories} 
            options={{
                tabBarLabel: ({ focused }) => <TabBarText focused={focused} text="دسته بندی"  />,
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home"  />,
            }} />
        </Tab.Navigator>
    )
}

export default bottomNavigation

const styles = StyleSheet.create({})
