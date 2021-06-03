import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function BottomBar({ handleLikePress, handlePassPress }) {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
        <FontAwesome name="times" size={27} color="#F06795"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="heart" size={27} color="#64EDCC" onPress={handleLikePress}></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  )
}
const styles = StyleSheet.create({
 container: {
   height: 75,
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
 }, 
 button: {
  width: 50,
  height: 50,
 }
})