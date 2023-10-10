import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../constants/color';
import { TouchableOpacity } from 'react-native';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filed ? filledBgColor : outlinedColor;
    const textColor = props.filed ? COLORS.white : COLORS.primary;
    return(
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{backgroundColor: bgColor},
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        paddingBotton: 16,
        paddingVertical:10, 
        borderColor: COLORS.primary,
        borderWidth: 2, 
        borderRadius: 12, 
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default Button;