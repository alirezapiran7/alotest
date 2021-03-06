import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import { Header } from 'react-native-elements'
import { metrics, color, keys } from '../../constants'
import { IconX, ICON_TYPE } from '../../icons'
import globalStyle from '../../styles'
import SegmentedControl from '@react-native-community/segmented-control'
import Text from '../../compnents/Text'
import AsyncStorage from '@react-native-community/async-storage'


const Orders = ({ navigation }) => {

    const [orderList, setOrderList] = useState([])
    const [segmentedIndex, setSegmentedIndex] = useState(2)
    const emptyList = "درحال حاضر هیچ در خواستی در حال انجام نیست"

    const [counter, setCounter] = useState(0)
    let interval = null

    const getOrders = async () => {
    
        let now = new Date().getTime();
        let save = await AsyncStorage.getItem(keys.orderList);
        console.log(save);
        if (save != null) {
            let orders = JSON.parse(save)
            const updateOrders = orders.map(item => {

                let d = Math.floor((now - item.time) / 30000)
                if (d === 1) {
                    return { ...item, step: 1 }
                } else if (d === 2) {
                    return { ...item, step: 2 }
                } else if (d >= 3) {
                    return { ...item, step: 3 }
                } else {
                    return item
                }

            })
            await AsyncStorage.setItem(keys.orderList, JSON.stringify(updateOrders));
            setOrderList(updateOrders.reverse())
        }
    }
    useEffect(() => {
        
        return () => {
            
        }
    }, [])


    useEffect(() => {
        getOrders();
        interval = setTimeout(() => {
            console.log("inja");
            setCounter(counter + 5);
            getOrders();
        }, 5000);

        return () => clearTimeout(interval);
    }, [counter]);

    const convertStep = (step) => {
        switch (step) {
            case 0:
                return 'در حال بررسی'
                break;
            case 1:
                return 'در حال آماده سازی'
                break;
            case 2:
                return 'در حال ارسال'
                break;
            case 3:
                return 'انجام شد'
                break;

            default:
                break;
        }
    }
    const stepColor = (step) => {
        switch (step) {
            case 0:
                return color.hint
                break;
            case 1:
                return color.orange400
                break;
            case 2:
                return color.tint
                break;
            case 3:
                return color.green400
                break;

            default:
                break;
        }
    }


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

            

            {orderList.length != 0 && <FlatList
                style={styles.list}
                data={orderList}
                keyExtractor={item => item.id.toString()}
                re
                renderItem={({ item }) => (
                    <View style={{
                        padding: metrics.s10,
                        backgroundColor: color.white,
                        borderRadius: metrics.s10,
                        marginTop: metrics.s10,
                        marginHorizontal: metrics.s10
                    }} >
                        <View style={styles.listItem}>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                            <Text ellipsizeMode='tail' style={{ marginTop: metrics.s8, flex: 1 ,color:color.title_dark}}>{item.title}</Text>
                            <Text style={{ marginTop: metrics.s8,fontSize:metrics.s12, }}>{new Date(item.time).toLocaleTimeString()}</Text>
                        </View>
                        <View style={{ height: 1, width: '90%', alignSelf: 'center', backgroundColor: color.hint, opacity: 0.1, marginVertical: metrics.s8 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                            <View style={{ flexDirection: 'column',alignItems: 'center' }}>
                                <Text style={{color:color.title_dark}}>وضعیت</Text>
                                <Text style={{fontSize:metrics.s12,color:stepColor(item.step)}}>{convertStep(item.step)}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{color:color.title_dark}}>هزینه</Text>
                                <Text style={{fontSize:metrics.s12,color:color.green400}}>{item.price} تومان</Text>
                            </View>


                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <IconX
                                style={{ width: 20, height: 20, }}
                                origin={ICON_TYPE.OCTICONS}
                                name={'location'}
                                color={color.orange300}
                                size={metrics.icons.small}
                            />
                            <Text>{item.address}</Text>
                            
                        </View>
                    </View>
                )
                } />}

            {orderList.length == 0 && <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <IconX origin={ICON_TYPE.SimpleLineIcons}
                    name={'social-dropbox'}
                    color={color.hint}
                    size={100} />
                <Text>{emptyList}</Text>
            </View>}




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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    
})
