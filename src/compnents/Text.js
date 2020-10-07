import React, { memo } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { color, metrics } from '../constants'


const RNText = (porps) => {
    return (
        <Text style={[styles.text,porps.style]}>{porps.children}
        </Text>
    )
}

export default memo(RNText)

const styles = StyleSheet.create({
    text: {
        color: color.text,
        fontSize:metrics.s14 ,
        fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null
    }
})
