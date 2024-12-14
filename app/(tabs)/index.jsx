import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import icedCoffeeImg  from '@/assets/images/iced-coffee.png'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImg}
      >
      <Text style={styles.text}>Coffee shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})