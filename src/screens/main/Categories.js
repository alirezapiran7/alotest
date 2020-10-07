import React, { useRef, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native'
import Text from '../../compnents/Text'
import { color, keys, metrics } from '../../constants'
import { IconX, ICON_TYPE } from '../../icons'
import Carousel from 'react-native-snap-carousel'
import globalStyle from '../../styles'

const fakeData = [
    { id: 0, image: 'https://alopeyk.com/blog/wp-content/uploads/2020/09/blog-cover-customer.jpg' },
    { id: 1, image: 'https://alopeyk.com/blog/wp-content/uploads/2020/08/Req-by-Call-Blog.jpg' },
    { id: 2, image: 'https://alopeyk.com/blog/wp-content/uploads/2020/09/blog-cover-courier.jpg' },
    { id: 3, image: 'https://alopeyk.com/blog/wp-content/uploads/2020/07/1080x540-1-1080x354.jpg' },
    { id: 4, image: 'https://alopeyk.com/blog/wp-content/uploads/2020/07/1125x354-1.jpg' },
    { id: 5, image: 'https://alopeyk.com/blog/wp-content/uploads/2020/01/NewsLetter-3.jpg' },

]

const carouselItem = ({ item }) => {
    return (
        <Image source={{ uri: item.image }} style={styles.image} />
        // <View style={{ backgroundColor: '#000', flex: 1 }}></View>
    )
}

const Categories = ({ navigation }) => {

    const refCarousel = useRef(null)
    const [flatSize, setflatSize] = useState({ height: -1, width: -1, x: 0, y: 0 })


    return (
        <View style={{ flex: 1, marginTop: metrics.statusBar }}>

            <View style={{
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
            }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text>امتیاز</Text>
                    <Text style={{ color: color.tint, marginHorizontal: metrics.s5 }}>0</Text>
                    <IconX
                        origin={ICON_TYPE.FONT_AWESOME5}
                        name={'trophy'}
                        size={metrics.s16}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text>تومان</Text>
                    <Text style={{ color: color.tint, marginHorizontal: metrics.s5 }}>0</Text>
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
                    data={fakeData}
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
                            console.log('awsome ');
                            console.log(event.nativeEvent.layout);
                            setflatSize(event.nativeEvent.layout)
                        }}
                        style={{ flex: 1, marginBottom: metrics.s16, marginHorizontal: metrics.s8 }}
                        data={flatSize.height == -1 ? [] : fakeData}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{
                                width: (flatSize.width - 32) / 2.0,
                                height: (flatSize.height - 48) / 3.0,
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
                            }} onPress={() => {
                                navigation.navigate(keys.map)
                            }}>
                                <Image style={{ flex: 1, }} source={{ uri: item.image }} />
                            </TouchableOpacity>

                        )
                        } />
                </View>

                {/* <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: metrics.s16, marginTop: metrics.s8 }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate(keys.map)
                    }} style={styles.image}>
                    <Image source={{ uri: fakeData[0].image }}  style={{ flex: 1}}></Image>
                    </TouchableOpacity>
                    <Image source={{ uri: fakeData[0].image }} style={styles.image} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: metrics.s16, marginTop: metrics.s8 }}>
                    <Image source={{ uri: fakeData[0].image }} style={styles.image} />
                    <Image source={{ uri: fakeData[0].image }} style={styles.image} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: metrics.s16, marginTop: metrics.s8, marginBottom: metrics.s8 }}>
                    <Image source={{ uri: fakeData[0].image }} style={styles.image} />
                    <Image source={{ uri: fakeData[0].image }} style={styles.image} />
                </View> */}


            </View>


        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
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
    }
})
