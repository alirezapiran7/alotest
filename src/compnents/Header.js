import React,{ memo } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {Header}  from 'react-native-elements'
import { metrics,color } from '../constants'
import { IconX, ICON_TYPE } from '../icons'
import globalStyle from '../styles'

const RNHeader  = (props) => {
    return (
        <Header
        rightComponent={
            <TouchableOpacity onPress={() => {
                props.navigation.goBack()
            }}>
                <IconX origin={ICON_TYPE.ANT_ICON}
                    name={'arrowright'}
                    color={color.title_dark}
                    size={metrics.icons.smallx} />
            </TouchableOpacity>
        }
        centerComponent={{ text: props.title, style: [globalStyle.title,{fontSize:metrics.s16}] }}
        containerStyle={{ backgroundColor:color.header, justifyContent: 'space-around', }}
        leftComponent={props.leftComponent}/>
    )
}

export default memo(RNHeader)

const styles = StyleSheet.create({})
