import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'


// title="ورود"
//             titleStyle={[globalStyle.title, { color: color.white }]}
//             type={'solid'}
//             buttonStyle={{ backgroundColor: color.tint, borderRadius: metrics.s5, }}
//             onPress={() => {
//                 navigation.replace(keys.mainStack)
//             }}
//             disabled={!reg.exec(name)}
//             loading={loading}

const RNButton = () => {
    return (
        <Button
            title="ورود"
            titleStyle={[globalStyle.title, { color: color.white }]}
            type={'solid'}
            buttonStyle={{ backgroundColor: color.tint, borderRadius: metrics.s5, }}
            onPress={() => {
                navigation.replace(keys.mainStack)
            }}
            disabled={!reg.exec(name)}
           
             />
    )
}

export default RNButton

const styles = StyleSheet.create({})
