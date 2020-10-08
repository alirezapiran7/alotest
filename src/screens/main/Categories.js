import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import Text from '../../compnents/Text'
import { color, keys, metrics } from '../../constants'
import { IconX, ICON_TYPE } from '../../icons'
import Carousel from 'react-native-snap-carousel'
import globalStyle from '../../styles'
const mockData = require('../../mockData.json');

const Categories = ({ navigation, route }) => {

    const refCarousel = useRef(null)
    const [flatSize, setflatSize] = useState({ height: -1, width: -1, x: 0, y: 0 })

    const carouselItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.image} onPress={() => {
                navigation.navigate(keys.products, { id: item.id })
            }}>
                <Image source={{ uri: item.image }} style={{ flex: 1, overflow: 'hidden' }} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.continer}>

            <View style={styles.navBar}>
                <View style={styles.score}>
                    <Text>امتیاز</Text>
                    <Text style={styles.scoreAmount}>0</Text>
                    <IconX
                        origin={ICON_TYPE.FONT_AWESOME5}
                        name={'trophy'}
                        size={metrics.s16}
                    />
                </View>
                <View style={styles.price}>
                    <Text>تومان</Text>
                    <Text style={styles.scoreAmount}>0</Text>
                    <IconX
                        origin={ICON_TYPE.FONT_AWESOME5}
                        name={'coins'}
                        size={metrics.s16}
                    />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', marginTop: metrics.s16 }}>


                <Carousel
                    style={{ flex: 1, }}
                    data={mockData}
                    ref={refCarousel}
                    renderItem={carouselItem}
                    sliderWidth={metrics.screenWidth}
                    itemWidth={metrics.screenWidth - 20}
                    enableSnap={true}
                    autoplay={true}
                    vertical={false}
                    enableMomentum={true}
                    loop
                    autoplayDelay={1000}
                    autoplayInterval={3000}
                    inactiveSlideScale={1} />

                <View style={{ flex: 3 }}>
                    <FlatList

                        onLayout={(event) => {
                            console.log('awsome 2');
                            console.log(event.nativeEvent.layout);
                            setflatSize(event.nativeEvent.layout)
                            console.log("width", (event.nativeEvent.layout.width - 32) / 2.0);
                            console.log("hedight", (event.nativeEvent.layout.height - 48) / 3.0);
                        }}
                        style={styles.list}
                        data={flatSize.height == -1 ? [] : mockData}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.listItem, {
                                width: (flatSize.width - 32) / 2.0,
                                height: (flatSize.height - 48) / 3.0,
                            }]} onPress={() => {
                                navigation.navigate(keys.products, { id: item.id })
                            }}>
                                <Image style={{ flex: 1, }} source={{ uri: item.image }} />
                                {/* <Text style={{ flexGrow: 1, position: 'absolute', bottom: metrics.s16, left: 0, right: 0, textAlign: 'center' }}> {item.title}</Text> */}
                            </TouchableOpacity>

                        )
                        } />
                </View>
            </View>


        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        marginTop: metrics.statusBar
    },
    navBar: {
        flexDirection: 'row',
        marginHorizontal: metrics.s16,
        marginTop: metrics.s8,
        padding: metrics.s10,
        borderRadius: metrics.s10,
        height: 50,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    image: {
        flex: 1,
        overflow: 'hidden',
        marginHorizontal:
            metrics.s8, borderRadius: metrics.s10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    score: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    scoreAmount: {
        color: color.tint,
        marginHorizontal: metrics.s5
    }, price:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    list: {
        flex: 1,

        marginHorizontal: metrics.s8
    },
    listItem: {
        marginHorizontal: metrics.s8, marginTop: metrics.s16,
        borderRadius: metrics.s10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        overflow: 'hidden'
    }

})
