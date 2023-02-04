import React from 'react'
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'

interface FontTextProps {
  title: String,
  style?: StyleProp<ViewStyle>,
}
const FontText = (props: FontTextProps) => {
  const {title, style} = props;
  return (
    <Text style={[style,styles.font]}>{title}</Text>
  )
}

export default FontText;

const styles = StyleSheet.create({
  font:{
    fontFamily: 'Ubuntu-Regular'
  }
})