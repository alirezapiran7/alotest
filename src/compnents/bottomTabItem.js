import * as React from 'react';
import { View,Platform, Text } from 'react-native'
import { color } from '../constants';
import { IconX, ICON_TYPE } from '../icons';



export function TabBarIcon(props) {
    return (
        <IconX
            origin={props.origin != null ? props.origin : ICON_TYPE.FONT_AWESOME5}
            name={props.name}
            size={props.size != null ? props.size : 20}
            style={{ marginBottom: -5 }}
            color={props.focused ? color.tint : color.gray}
        />
    );
}

export function TabBarText(props) {
    return (
        <View>
           {props.focused && <Text
                style={{ color: props.focused ? color.tint : color.gray, fontSize: 11, marginBottom: 5, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null}}>
                {props.text}
            </Text>}
        </View>

    );
}

