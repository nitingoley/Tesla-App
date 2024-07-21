import { View, Image , Text } from "react-native";
import React from "react";
import styles from "./Styles";
styles
const Heading =()=>{
    return(
        <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo}/>
    {/* <Image source={require('../../assets/menu.png')} style={styles.menu}/>
     */}
        <Text style={styles.text}>Menu</Text>
        </View>
    )
}

export default  Heading;