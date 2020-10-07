
import React ,{useEffect}from 'react'
import { StyleSheet, Text, View ,Alert} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { keys } from '../constants';
import categories from '../screens/main/categories'
import orders from '../screens/main/orders'
import { TabBarIcon, TabBarText } from '../compnents/bottomTabItem';
import { ICON_TYPE } from '../icons';


const Tab = createBottomTabNavigator();


const bottomNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={keys.categories}>

            <Tab.Screen name={keys.myOrders} component={orders}
            options={{
                tabBarLabel: ({ focused }) => <TabBarText focused={focused} text="سفارش های من"  />,
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="clock"  />,
            }}/>

            <Tab.Screen name={keys.categories} component={categories} 
            options={{
                tabBarLabel: ({ focused }) => <TabBarText focused={focused} text="دسته بندی"  />,
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home"  />,
            }} />
        </Tab.Navigator>
    )
}

export default bottomNavigation

const styles = StyleSheet.create({})
