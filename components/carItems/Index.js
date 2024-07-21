import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import Cars from '../styleButton';
import styles from './style';


export default function CarItems(props) {
    // render() {
const {name , tagLine , tagLineCta , image}= props;

    return (

        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.Image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagLine}</Text>
               <Text style={styles.tagLineCta}>{tagLineCta}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Cars
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom order pressed")
                    }}
                />
                <Cars
                    type="secondary"
                    content={"Existing Invertory"}
                    onPress={() => {
                        console.warn("Existing Invertory pressed")
                    }}
                />

            </View>
        </View>

    )
}
// }




// const styles = StyleSheet.create({

//   });
