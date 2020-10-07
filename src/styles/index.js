import { Platform, StyleSheet } from 'react-native'
import { metrics, color } from '../constants'


const globalStyle = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: color.background_screen
    },
    title: {
        color: color.title_dark,
        fontSize: metrics.s16,
        fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null
    },
    text: {
        color: color.text,
        fontSize: Platform.OS != 'ios' ? metrics.s14 : metrics.s10,
        fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    }

})
export default globalStyle;