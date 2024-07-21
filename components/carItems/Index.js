import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import Cars from '../styleButton';
import styles from './style';


export default function CarItems(props) {
    // render() {
const {name , tagLine , tagLineCta , image}= props.car;

    return (

        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.Image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagLine} 
                {' '}
               <Text style={styles.tagLineCta}>{tagLineCta}</Text>
               </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Cars
                    type="primary"
                    // content={"Order Now"}
                    content = {"Order now"}
                    onPress={() => {
                        console.warn("Custom order pressed")
                    }}
                />
                <Cars
                    type="secondary"
                    content={"Demo drive"}
                    onPress={() => {
                        console.warn("Demo drive")
                    }}
                />

            </View>
        </View>

    )
}
// }




// const styles = StyleSheet.create({

//   });
