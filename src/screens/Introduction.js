import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { IconX, ICON_TYPE } from '../icons'
import { keys, metrics,color } from '../constants'
import AsyncStorage from '@react-native-community/async-storage'
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [{
    key: 'key0',
    title: 'android',
    text: 'this is android',
    icon: 'android',
    colors: [color.gradientStart, color.gradientEnd]
},
{
    key: 'key1',
    title: 'ios',
    icon: 'apple',
    text: 'this is ios',
    colors: [color.gradientStart, color.gradientEnd]
}, {
    key: 'key2',
    title: 'react native',
    icon: 'react',
    text: 'this is react native',
    colors: [color.gradientStart, color.gradientEnd]
}
]
const page = ({ item }) => {
    return (
        <LinearGradient style={styles.continer}
            colors={[color.gradientStart, color.gradientEnd]}
            start={{ x: 0, y: 0.1 }}
            end={{ x: 0.1, y: 1 }} style={styles.continer}>
            <View style={styles.continer}>
                <IconX origin={ICON_TYPE.FONT_AWESOME5}
                    name={item.icon}
                    color={color.white}
                    size={metrics.images.logo} />
            </View>
            <View style={styles.continer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>

        </LinearGradient>)
}
const renderNextButton = () => {
    return (
        <View style={styles.button}>
            <IconX origin={ICON_TYPE.FONT_AWESOME5}
                name={'arrow-right'}
                color={color.white}
                size={metrics.icons.small} />
        </View>
    );
}

const renderDoneButton = () => {
    return (
        <View style={styles.button}>
            <IconX origin={ICON_TYPE.FONT_AWESOME5}
                name={'check'}
                color={color.white}
                size={metrics.icons.small} />
        </View>
    );
}

const introduction = ({ navigation }) => {
    return (
        <AppIntroSlider renderItem={page}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            data={slides} onDone={async () => {
                await AsyncStorage.setItem(keys.firstLunch, 'true')
                navigation.replace(keys.mainStack)
            }} />
    )
}

export default introduction

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: metrics.s20,
        color: color.white,
    },
    text: {
        marginTop: metrics.s10,
        fontSize: metrics.s16,
        color: color.white
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
