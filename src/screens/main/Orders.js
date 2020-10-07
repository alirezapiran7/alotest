import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { metrics, color } from '../../constants'
import { IconX, ICON_TYPE } from '../../icons'
import globalStyle from '../../styles'
import SegmentedControl from '@react-native-community/segmented-control'
import Text from '../../compnents/Text'


const Orders = ({ navigation }) => {

    const [segmentedIndex, setSegmentedIndex] = useState(2)
    const emptyList = "درحال حاضر هیچ در خواستی در حال انجام نیست"

    return (
        <View style={{ flex: 1 }}>
            <Header

                centerComponent={{ text: 'سفارش‌های من', style: [globalStyle.title, { fontSize: metrics.s16 }] }}
                containerStyle={{ backgroundColor: color.header, justifyContent: 'space-around', }}
                leftComponent={<TouchableOpacity onPress={() => {

                }}>
                    <IconX origin={ICON_TYPE.ANT_ICON}
                        name={'calendar'}
                        color={color.title_dark}
                        size={metrics.icons.smallx} />
                </TouchableOpacity>} />

            <SegmentedControl
                values={['رزرو شده', 'ناموفق', 'درحال انجام']}
                selectedIndex={segmentedIndex}
                style={{ height: 35, marginTop: metrics.s5, marginHorizontal: metrics.s16, backgroundColor: color.white }}
                tintColor={color.tint}
                fontStyle={{ color: color.tint, }}
                activeFontStyle={{ color: color.white }}
                onChange={(event) => {
                    setSegmentedIndex(event.nativeEvent.selectedSegmentIndex)
                }}
            />

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <IconX origin={ICON_TYPE.SimpleLineIcons}
                    name={'social-dropbox'}
                    color={color.hint}
                    size={100} />
                <Text>{emptyList}</Text>


            </View>




        </View>
    )
}

export default Orders

const styles = StyleSheet.create({})
