import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../Constants/colors'

const Button = (props) => {
        const filledBgColor = props.color || COLORS.primary;
        const outlinedColor = COLORS.white;
        const bgColor = props.filled ? filledBgColor : outlinedColor;
        const textColor = props.filled ? COLORS.white : COLORS.green1;
  return (
    <TouchableOpacity style={{...styles.button,
                              ...{backgroundColor: bgColor},
                              ...props.style
    }}
     onPress={props.onPress} >  

     <Text style={{fontSize: 25, ... { color: textColor}}} >{props.title}
     </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.green1,
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
            }
})

export default Button