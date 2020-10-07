import {Toast} from 'native-base'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import {keys} from '../constants'

export async function Post({url, data, useToken = true, useAlert = true,}){

    const clearLogin = async()=>{
        await AsyncStorage.removeItem(keys.apiToken);
        RNRestart.Restart()
    }

    try{
        const token = useToken ?  await AsyncStorage.getItem(KeyStorage.apiToken):null
        const res = await axios({
            method:'POST',
            url:url,
            headers: {
                'Accept': 'application/json',
                'Authorization': token != null?'Bearer ' + token : null
            },
            data:data
        });
        if (res.data.ok){
            return res.data
        }else {
            if (useAlert) 
                Toast.show({text: res.data.message,
                    buttonText: "باشه",
                    textStyle: { },
                    buttonTextStyle: { },
                    style: { flexDirection: 'row-reverse' },
                    duration: 5000,
                    type:'warning',
                    onClose: (reason) => {
                            if (reason == 'user') {
                            
                            }

                        }
                    })
        }
    }catch(err){
       
        if(err.response != null && err.response.status == '401'){
              
                Toast.show({
                    text: 'لصفا دوباره وارد شوید',
                    buttonText: "ورود",
                    textStyle: { },
                    buttonTextStyle: { },
                    style: { flexDirection: 'row-reverse' },
                    duration: 5000,
                    type:'danger',
                    onClose: (reason) => {
                        clearLogin();
                    }
                })
        }else if(err.response != null && err.response.status == '500'){
            if (useAlert) 
                Toast.show({
                    text: 'خطا در سرور، با پشتیبانی تماس بگیرید',
                    buttonText: "تلاش مجدد",
                    textStyle: { },
                    buttonTextStyle: { },
                    style: { flexDirection: 'row-reverse' },
                    duration: 600000,
                    type:'danger',
                    onClose: (reason) => {
                        if (reason == 'user') {
                            Post({url:url, data : data , useToken : useToken, useAlert : useAlert})  
                        }
        
                    }
                })
        }else{
            Toast.show({
                text: 'تنظیمات اینترنت خود را بررسی کنید',
                buttonText: "تلاش مجدد",
                textStyle: { },
                buttonTextStyle: { },
                style: { flexDirection: 'row-reverse' },
                duration: 600000,
                type:'danger',
                onClose: (reason) => {
                    if (reason == 'user') {
                        Post({url : url, data : data , useToken : useToken, useAlert : useAlert}) 
                    }
    
                }
            })
        }
    }

}
