import React, { useState,useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import { metrics, color } from '../../constants'
import { IconX, ICON_TYPE } from '../../icons'
import globalStyle from '../../styles'
import SegmentedControl from '@react-native-community/segmented-control'
import Text from '../../compnents/Text'


const Orders = ({ navigation }) => {

    const [segmentedIndex, setSegmentedIndex] = useState(2)
    const emptyList = "درحال حاضر هیچ در خواستی در حال انجام نیست"
    const [counter, setCounter] = useState(0)
    let interval = null
    // useEffect(() => {
    //     interval = setTimeout(() => {
    //         console.log("inja");
    //         setCounter(counter + 5);
    //     }, 5000);

    //     return () => clearTimeout(interval);
    // }, [counter]);



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

            <FlatList
                style={styles.list}
                data={[]}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, flexDirection: 'column', }}>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={{ marginTop: metrics.s8, height: 60, }}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                <TouchableOpacity style={{ backgroundColor: color.tint, borderRadius: metrics.s5, paddingHorizontal: metrics.s20, padding: metrics.s5 }}
                                    onPress={() => {
                                        navigation.navigate(keys.map, { product: item })
                                    }}>
                                    <Text style={{ color: color.white }}>خرید</Text>
                                </TouchableOpacity>
                                <Text style={{ color: color.green400 }}>{item.price.toString()} تومان</Text>

                            </View>
                        </View>

                    </View>
                )
                } />

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
        marginHorizontal: metrics.s10
    }
})
