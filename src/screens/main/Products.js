import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native'
import Header from '../../compnents/Header'
import { metrics, color, keys } from '../../constants'
import { IconX, ICON_TYPE } from '../../icons'
import globalStyle from '../../styles'
import { Button } from 'react-native-elements'
import Text from '../../compnents/Text'

const mockData = require('../../mockData.json');

const products = ({ navigation, route }) => {

    const { id } = route.params
    const data = mockData.find(item => item.id === id)

    return (
        <View style={{ flex: 1 }}>
            <Header
                navigation={navigation}
                title={data.title}
            />

            <FlatList
                style={styles.list}
                data={data.product}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, marginHorizontal: metrics.s8, flexDirection: 'column',}}>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.txtTitle }>{item.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                <TouchableOpacity style={styles.cartButton}
                                    onPress={() => {
                                        navigation.navigate(keys.map, { product: item })
                                    }}>
                                    <Text style={{ color: color.white }}>خرید</Text>
                                </TouchableOpacity>
                                <Text style={{ color: color.green400, fontSize: metrics.s12 }}>{item.price.toString()} تومان</Text>

                            </View>
                        </View>

                    </View>
                )
                } />
        </View >
    )
}

export default products

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginBottom: metrics.s16,
        marginHorizontal: metrics.s8
    },
    listItem: {
        flexDirection: 'row-reverse',
        padding: metrics.s10,
        backgroundColor: color.white,
        borderRadius: metrics.s10,
        marginTop: metrics.s10,
        marginHorizontal: metrics.s10,
        
    },
    cartButton: {
        backgroundColor: color.tint,
        borderRadius: metrics.s5,
        paddingHorizontal: metrics.s20,
        padding: metrics.s5
    },
    txtTitle:{
        backgroundColor: color.tint, 
        borderRadius: metrics.s5,
         paddingHorizontal: metrics.s20, 
         padding: metrics.s5
    },
    orderBottom: {
        flex: 1, marginHorizontal: metrics.s8, flexDirection: 'column',
    },
    txtTitle: {
        marginTop: metrics.s8, height: 60, textAlign: 'right', color: color.title_dark
    }
})
