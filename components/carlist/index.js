import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import cars from './carList'
import CarItems from "../carItems/Index";
import styles from "./style";


export default function CarList() {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item})=> <CarItems car={item} />}
            showsHorizontalScrollIndicator= {false}
            snapToAlignment= {'start'}
            decelerationRate= {'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}