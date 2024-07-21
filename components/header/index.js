import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'
import  styles from './style'
const myfun=()=>{
    return (
      <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
       <Image source={require('../../assets//menu.png')} style={styles.menu} />
      </View>
    )
  }

  export default myfun;