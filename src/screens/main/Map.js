import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert, PermissionsAndroid, Platform, Keyboard } from 'react-native'
import Animated from 'react-native-reanimated';

import { color, metrics, keys } from '../../constants';
import { Button } from 'react-native-elements'
import { IconX, ICON_TYPE } from '../../icons';
import globalStyle from '../../styles'
import Text from '../../compnents/Text'
import mapStyle from '../../constants/mapStyle.json'
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native'




const map = ({ navigation, route }) => {

    const { product } = route.params

    const [location, setLocation] = useState({
        latitude: 35.699730,
        longitude: 51.336591,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const [address, setAddress] = useState('')

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(info => {
                    if (info != null) {
                        setLocation({
                            latitude: info.coords.latitude, longitude: info.coords.longitude, latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })
                    } else {

                    }

                });
            } else {


            }
        } catch (err) {


        }
    };

    const request = async () => {
        if (Platform.OS === 'android') {
            requestCameraPermission()
        }

        Geolocation.setRNConfiguration({ authorizationLevel: 'always' });

        Geolocation.getCurrentPosition(info => {
            if (info != null) {
                setLocation({
                    latitude: info.coords.latitude, longitude: info.coords.longitude, latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                })
            } else {

            }
        });
    }

    useEffect(() => {
        request()

        return () => {

        }
    }, [])

    const saveOrder = async () => {

        const d = new Date()
        const order = {
            ...product,
            time: d.getTime(),
            step: 0,
            latitude: location.latitude,
            longitude: location.longitude,
            address: '',
            id: d.getTime()
        }

        let save = await AsyncStorage.getItem(keys.orderList);

        if (save == null) {
            let orders = [order]
            await AsyncStorage.setItem(keys.orderList, JSON.stringify(orders))

        } else {
            let orders = JSON.parse(save);
            orders = [...orders, order];
            await AsyncStorage.setItem(keys.orderList, JSON.stringify(orders))
        }
        const test = await AsyncStorage.getItem(keys.orderList);

        navigation.dispatch(StackActions.popToTop());
        navigation.navigate(keys.myOrders)
    }

    return (
        <View style={styles.continer}>

            <View style={{ flex: 1, marginBottom: -metrics.s40 }}>

                <MapView style={{ flex: 1 }}

                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    customMapStyle={mapStyle}
                    initialRegion={location}
                    // region={location}
                    onRegionChangeComplete={(region) => {
                        setLocation({
                            ...location, latitude: region.latitude,
                             longitude: region.longitude,
                            latitudeDelta: region.latitudeDelta,
                             longitudeDelta: region.longitudeDelta
                        })
                    }
                    }
                />
                <IconX style={styles.mapCnterIcon}
                    origin={ICON_TYPE.FONT_AWESOME5}
                    name={'map-marker-alt'} color={color.orangeA400} size={metrics.icons.smallx} />

            </View>

            <TouchableOpacity style={styles.backButton} onPress={() => {
                navigation.goBack()

            }}>
                <IconX origin={ICON_TYPE.ANT_ICON}
                    name={'arrowright'}
                    color={color.title_dark}
                    size={metrics.icons.smallx}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.myLocation} onPress={() => {

                request();
            }}>
                <IconX origin={ICON_TYPE.FONT_AWESOME}
                    name={'location-arrow'}
                    color={color.title_dark}
                    size={metrics.icons.smallx}
                />
            </TouchableOpacity>



            <View style={{
                height: 150,
                flexDirection: 'column',
                padding: metrics.s16,
                backgroundColor: color.white,
                borderTopLeftRadius: metrics.s20,
                borderTopRightRadius: metrics.s20,
            }}>
                <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color.hint, margin: metrics.s5 }}></View>
                    <Text>آدرس شما</Text>
                </View>
                <View style={{ flex: 1, marginVertical: metrics.s10, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconX
                        style={{ width: 20, height: 20, }}
                        origin={ICON_TYPE.OCTICONS}
                        name={'location'}
                        color={color.orange300}
                        size={metrics.icons.small}
                    />
                    <Text style={{ textAlign: 'right' }}>نیاز به api google</Text>
                    <TouchableOpacity style={{}} onPress={() => {

                    }}>
                        <IconX origin={ICON_TYPE.ANT_ICON}
                            name={'search1'}
                            color={color.title_dark}
                            size={metrics.icons.small}
                        />
                    </TouchableOpacity>
                </View>

                <Button
                    title="ثبت"
                    titleStyle={[globalStyle.title, { color: color.white }]}
                    type={'solid'}
                    buttonStyle={{ backgroundColor: color.tint, borderRadius: metrics.s5, }}
                    onPress={() => {
                        saveOrder();
                        // console.log('region new');
                        // console.log(location);
                    }}
                    disabledStyle={{ backgroundColor: color.tint, opacity: 0.7, borderRadius: metrics.s5, }}
                    disabledTitleStyle={[globalStyle.title, { color: color.white }]}
                    disabled={false}
                    loading={false} />

            </View>

        </View >
    )
}

export default map

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.white
    },
    mapCnterIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: metrics.s40,
        height: metrics.s40,
        marginBottom: -metrics.s40
    },
    backButton:{
        position: 'absolute', 
        top: metrics.statusBar,
         right: metrics.s16, 
         width: metrics.s40, 
         height: metrics.s40, 
         borderRadius: metrics.s20, 
         backgroundColor: color.white
        , justifyContent: 'center',
         alignItems: 'center'
    },myLocation:{
        position: 'absolute',
         bottom: 160, 
         right: metrics.s16, width: metrics.s40, height: metrics.s40, borderRadius: metrics.s20, backgroundColor: color.white
        , justifyContent: 'center', alignItems: 'center'
    }

})
