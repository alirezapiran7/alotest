import React, { useEffect } from 'react'
import { StyleSheet, Text, View,Image, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { keys, metrics, urls,color } from '../constants'
import {Post} from '../api'
import LinearGradient from 'react-native-linear-gradient'

const check = ({navigation}) => {

    // AsyncStorage.removeItem(keys.apiToken)
    useEffect(() => {
        setTimeout(()=>{
            checkExist();
        },2000)

    })

    const  checkExist = async() =>{
        const firstLunch = await AsyncStorage.getItem(keys.firstLunch);
        if ( firstLunch == null ){
            navigation.replace(keys.introduction)

        }else{

            navigation.replace(keys.mainStack)
            // const user = await Post({url:urls.login})

            // if ( user != null){
            //     navigation.replace(keys.mainStack)

            // }else 
            //     navigation.replace(keys.authStack)
        }
        

    }

    return (
        <LinearGradient style={styles.continer}
        colors={[color.gradientStart,color.gradientEnd]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}>
            <Image style={styles.imgLogo} />
            <Text style={styles.link}>Alireza Piran</Text>
            <ActivityIndicator size={'small'} color={color.white} style={styles.loading} />
        </LinearGradient>
    )
}

export default check

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent:'center', 
        alignItems:'center'  
    },
    imgLogo:{
        width:metrics.images.logo,
        height:metrics.images.logo,
        borderRadius:metrics.images.logo/2,
        backgroundColor:color.white,
    },
    link:{
        position:'absolute',
        right:0,
        left:0,
        bottom:metrics.s16,
        height:metrics.s20,
        fontSize:metrics.s16,
        textAlign:'center',
        color:color.white
    }
    ,
    loading:{
        position:'absolute',
        right:0,
        left:0,
        bottom:metrics.s40,

    }


})
