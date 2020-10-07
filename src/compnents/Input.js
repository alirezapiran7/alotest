import React, { memo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Form, Item, Input, Label, Icon, Content, Button } from 'native-base'
import { metrics,color } from '../constants'

/**
 * 
 * @param {
 * } props
 * lable,color,onChangeText,icon,max,regax,secure,keyboartype
 */


const RNInput = (props) => {
    //const [content, setContent] = useState({ isValid: false, text: '' })
    const [valid, setValid] = useState(false)
    const [text, setText] = useState('')

    return (
        <Form style={props.style}>
            <Item floatingLabel error={!valid && props.regax != null && text.length > 0} success={props.regax != null && valid} >
                <Label style={{ color: props.color, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13, marginRight: text.length > 0 ? 5 : 30 ,textAlign:'right' }}>{props.lable}</Label>

                <Input style={{
                    margin: 5,
                    color: props.color,
                    fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null,
                    fontSize: 13
                }}
                    secureTextEntry={props.seure}
                    maxLength={props.max}
                    value={text}
                    keyboardType={props.keyboardType}
                    onChangeText={(value) => {
                        props.onChangeText(value)
                        setText(value)
                        setValid(props.regax == null || props.regax.test(value))
                    }} />

                <Icon type={props.iconType!= null? props.iconType:"FontAwesome"} name={props.icon} color={props.color ? props.color : color.hint} style={{ fontSize: 20, color: color.hint }} />
            </Item>

        </Form>


        /* <Form style={{ marginHorizontal: 25 }}>
            <Item floatingLabel error={!isValid && name.length > 0} >
                <Label style={{ color: color.hint, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13, marginRight: name.length == 0 ? 30 : 5 }}>شماره تلفن همراه</Label>
                <Input style={{ margin: 5, color: color.hint, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13 }} keyboardType={'phone-pad'} maxLength={11} value={name} onChangeText={(value) => {
                    setName(value)
                    setIsValid(reg.exec(value))
                }} clearButtonMode>
                </Input>
                <Icon type="FontAwesome" name="mobile-phone" color={color.hint} style={{ fontSize: 20, color: color.hint }} />
            </Item>
        </Form> */

        // <Form>
        //     <Item floatingLabel error={!content.isValid && props.regax != null && content.text.length > 0} >
        //         <Label style={{ color: props.color, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13, marginRight: content.text.length > 0 ? 5:30 }}>{props.lable}</Label>

        //         <Input style={{ margin: 5, color: props.color, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13 }} maxLength={props.max} value={content.text} onChangeText={(value) => {
        //              setContent({text: value, isValid: props.regax.exec(value) })
        //             props.onChangeText(content)
        //         }}/>
        //         <Icon type="FontAwesome" name={props.icon} color={props.color ? props.color : color.hint} style={{ fontSize: 20, color: color.hint }} />
        //     </Item>
        // </Form>

        // <Form  >
        //     <Item floatingLabel error={!content.valid && props.regax != null && content.text.length > 0} >
        //         <Label style={{ color: props.color, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13, marginRight: content.text.length == 0 ? 30 : 5 }}>{props.lable}</Label>
        //         <Input style={{ margin: 5, color: props.color, fontFamily: Platform.OS != 'ios' ? 'IranSans-Regular' : null, fontSize: 13 }} maxLength={props.max} value={content.text} onChangeText={(value) => {
        //             setContent({ ...content, text: value, isValid: props.regax.exec(value) })
        //             props.onChangeText(content)
        //         }}
        //         />
        //         <Icon type="FontAwesome" name={props.icon} color={props.color ? props.color : color.hint} style={{ fontSize: 20, color: color.hint }} />
        //     </Item>
        // </Form>

    )
}

export default memo(RNInput)

const styles = StyleSheet.create({})
