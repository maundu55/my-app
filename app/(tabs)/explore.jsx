import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This coffee shop</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
  text: {
    fontSize: 30,
    color: "rgb(45, 24, 24)",
    fontWeight: "bold",
  },
});